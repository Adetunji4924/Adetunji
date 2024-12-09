import FinhamVideo from "../assets/Finham Demo.mp4";
import DevSkill from "../components/dev-skill";

const EnsomeCaseStudy = () => {
  const tools = ["HTML", "CSS", "JavaScript"];

  const openEnsome = () => {
    window.open("https://ensome-project.netlify.app/", "_blank");
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-20">
      <video
        src={FinhamVideo}
        autoPlay
        muted
        loop
        className=" h-full object-cover"
      />
      <div className="mt-4">
        <h1 className="text-white text-[1.5rem] font-Labora font-bold mb-4">
          Ensome Case Study
        </h1>
        <p className="text-secondary-0 text-[.9rem]">
          Ensome is a data-driven web solution designed to help users harness
          the power of their data. While I primarily worked on the website and
          not the web app itself, I contributed to building a multi-page
          platform with clean and responsive designs, showcasing the company’s
          offerings and data solutions.<br /> <br /> This project was an essential milestone
          in my frontend development journey. Using HTML, CSS, and JavaScript, I
          focused on creating structured layouts, styling them for a polished
          look, and implementing interactive elements to enhance user
          engagement.<br /> <br /> Through this project, I learned the importance of clean
          code, design consistency, and creating websites that are both
          functional and visually appealing. Ensome represents my foundation in
          web development and my commitment to delivering quality projects from
          the start.
        </p>

        <DevSkill devSkillData={tools} />

        <div className="mt-8 mb-16">
          <p className="text-[1.1rem] font-medium font-poppins text-white">
            GitHub Link
          </p>
          <a
            target="_blank"
            className="text-primary-0 text-[.8rem] underline font-poppins"
            href="https://github.com/Adetunji4924/Ensome-Project"
          >
            https://github.com/Adetunji4924/Ensome-Project
          </a>
        </div>
      </div>
      <button
        onClick={openEnsome}
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

export default EnsomeCaseStudy;
