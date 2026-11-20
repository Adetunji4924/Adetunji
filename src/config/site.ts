/**
 * Single source of truth for identity, navigation and contact details.
 * Content that still needs the owner's confirmation is marked `CONFIRM:`.
 */

export const site = {
  /** Visual brand / wordmark. Correct Yoruba spelling and accents. */
  brand: 'Adétúnjí',
  /** Professional name: used in metadata, SEO and structured data. */
  name: 'Adetunji Adewole',
  /** Formal contexts only. */
  legalName: 'Adewole Muhammed Adetunji',
  descriptor: ['Technology Leader', 'Systems Architect', 'Product Builder'],
  philosophy: ['Building technology.', 'Solving problems.', 'Understanding people.', 'Creating value.'],
  description:
    'Adetunji Adewole is a technology leader, systems architect and product builder working across engineering, systems architecture and product development.',
  locale: 'en_GB',
  /** Public contact address (confirmed by owner). */
  email: 'adewoleadetunji77@gmail.com',
} as const;

export type NavItem = { label: string; href: string; icon: 'home' | 'work' | 'writing' | 'about' | 'mail' };

export const nav: NavItem[] = [
  { label: 'Home', href: '/', icon: 'home' },
  { label: 'Work', href: '/work', icon: 'work' },
  { label: 'Writing', href: '/writing', icon: 'writing' },
  { label: 'About', href: '/about', icon: 'about' },
  { label: 'Contact', href: '/contact', icon: 'mail' },
];

export type Social = { label: string; href: string; handle: string };

/** Links carried over from the previous site (all resolved when checked on 17 Nov 2026; LinkedIn blocks automated checks). */
export const socials: Social[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/adewole-muhammed-3a86b723a/', handle: 'Adewole Muhammed' },
  { label: 'GitHub', href: 'https://github.com/Adetunji4924', handle: 'Adetunji4924' },
  { label: 'X', href: 'https://x.com/Moh_Adetunji', handle: '@Moh_Adetunji' },
  { label: 'Instagram', href: 'https://www.instagram.com/moh_adetunji/', handle: '@moh_adetunji' },
  { label: 'Dribbble', href: 'https://dribbble.com/Adetunji49', handle: 'Adetunji49' },
];
