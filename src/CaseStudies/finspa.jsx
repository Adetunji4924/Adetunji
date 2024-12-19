import Finspa from "../assets/Finspa 1.png";
import DevSkill from "../components/dev-skill";

const FinspaCaseStudy = () => {
  const tools = ["Adobe PhotoShop",
            "Adobe Illustrator",
            "After Effects",
            "Premiere Pro",
            "Canva"];

  const openFinspa = () => {
    window.open("https://www.instagram.com/finspainv?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "_blank");
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-20">
      <img className="w-full" src={Finspa} alt="Finspa" />
      <div className="mt-4">
        <h1 className="text-white text-[1.5rem] font-Labora font-bold mb-4">
          Finspa Case Study
        </h1>
        <p className="text-secondary-0 text-[.9rem]">
        Finspa is a financial services company offering loans, investments, and savings solutions. As a contracted creative designer, I spearheaded the design team, producing all creative materials to strengthen the brand’s digital and offline presence. My contributions included:
        </p>
        <ul className="text-secondary-0 text-[.9rem] mt-4 mb-4 flex flex-col gap-2">
          <li>Designing social media posts to engage audiences and promote financial literacy.</li>
          <li>Creating high-quality animations, videos, and presentation slides for marketing and outreach.</li>
          <li>
          Designing forms, invoices, and branded merchandise for company use.
          </li>
        </ul>
        <p className="text-secondary-0 text-[.9rem]">
        I utilized tools like Photoshop, Illustrator, Canva, After Effects, Premiere Pro, and CapCut to deliver visually compelling and impactful designs, driving engagement and effectively showcasing Finspa’s services.
        </p>

        <DevSkill devSkillData={tools} />

        <div className="mt-8 mb-16">
          <p className="text-[1.1rem] font-medium font-poppins text-white">
            Instagram Page
          </p>
          <a
            target="_blank"
            className="text-primary-0 text-[.8rem] underline font-poppins"
            href="https://www.instagram.com/finspainv?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          >
            https://www.instagram.com/finspainv
          </a>
        </div>
      </div>
      <button
        onClick={openFinspa}
        className="fixed left-0 bottom-0 w-full bg-primary-0 py-4 flex justify-center items-center gap-2 text-white text-lg font-bold"
      >
        Open Project
        <svg
          className="w-6"
          fill="currentcolor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-128c0-17.7-14.3-32-32-32L352 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
        </svg>
      </button>
    </div>
  );
};

export default FinspaCaseStudy;
