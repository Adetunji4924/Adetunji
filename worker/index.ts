/**
 * Contact form endpoint. Everything else is served from the static build.
 * POST /api/contact (urlencoded or multipart form data)
 *  - with `Accept: application/json` (the page's fetch): replies JSON
 *  - without (no-JS form post): redirects to /contact/thanks or back with ?error
 */

const LIMITS = { name: 120, email: 200, subject: 160, message: 5000 } as const;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Result = { ok: true } | { ok: false; status: number; error: string };

function clean(value: string | File | null, max: number) {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
}

async function handleContact(request: Request, env: Env): Promise<Result> {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return { ok: false, status: 400, error: 'invalid_body' };
  }

  // Honeypot: real visitors never fill this. Pretend success so bots learn nothing.
  if (clean(form.get('company'), 200)) return { ok: true };

  const name = clean(form.get('name'), LIMITS.name);
  const email = clean(form.get('email'), LIMITS.email);
  const subject = clean(form.get('subject'), LIMITS.subject);
  const message = clean(form.get('message'), LIMITS.message);

  if (!name || !EMAIL_RE.test(email) || message.length < 10) {
    return { ok: false, status: 422, error: 'invalid_fields' };
  }
  if (!env.CONTACT_FROM) {
    return { ok: false, status: 503, error: 'not_configured' };
  }

  const title = subject || `Message from ${name}`;
  const text = `${message}\n\n— ${name} <${email}>\nSent from the contact form on your website.`;
  const html = `<p style="white-space:pre-wrap">${escapeHtml(message)}</p><hr><p>${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;<br><small>Sent from the contact form on your website.</small></p>`;

  try {
    await env.EMAIL.send({
      to: env.CONTACT_TO,
      from: { email: env.CONTACT_FROM, name: 'Website contact form' },
      replyTo: { email, name },
      subject: `[Website] ${title}`,
      text,
      html,
    });
    return { ok: true };
  } catch (err) {
    const code = (err as { code?: string }).code ?? 'unknown';
    console.error('contact send failed', code, (err as Error).message);
    return { ok: false, status: code === 'E_RATE_LIMIT_EXCEEDED' || code === 'E_DAILY_LIMIT_EXCEEDED' ? 429 : 502, error: 'send_failed' };
  }
}

export default {
  async fetch(request, env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/api/contact') {
      if (request.method !== 'POST') {
        return new Response('Method not allowed', { status: 405, headers: { Allow: 'POST' } });
      }
      // Same-origin posts only.
      const origin = request.headers.get('Origin');
      if (origin && origin !== url.origin) return new Response('Forbidden', { status: 403 });

      const result = await handleContact(request, env);
      const wantsJson = (request.headers.get('Accept') ?? '').includes('application/json');
      if (wantsJson) {
        return Response.json(result.ok ? { ok: true } : { ok: false, error: result.error }, { status: result.ok ? 200 : result.status });
      }
      const to = result.ok ? '/contact/thanks' : '/contact/error';
      return Response.redirect(new URL(to, url.origin).toString(), 303);
    }

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
