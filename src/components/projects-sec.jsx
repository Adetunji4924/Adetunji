import { useState } from "react";
import Project from "./project";
import Finham from ".././assets/Thumbnail.png";
import Wealth from "..//assets/Cover.png";
import Ensome from "../assets/ensome.png";
import PureMatch from "../assets/Purematch 1.png";
import AWAHBooks from "../assets/AWAHBooks 1.png";
import Finspa from "../assets/Finspa 1.png";
import Modal from "./modal";
import FinhamCaseStudy from "../CaseStudies/finham";
import WealthCaseStudy from "../CaseStudies/wealth";
import EnsomeCaseStudy from "../CaseStudies/ensome";
import FinspaCaseStudy from "../CaseStudies/finspa";
import PureMatchCaseStudy from "../CaseStudies/purematch";
import AwahBooksCaseStudy from "../CaseStudies/awahbooks";

const ProjectSection = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);

  const openModal = (caseStudy) => {
    setActiveCaseStudy(caseStudy);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveCaseStudy(null);
  };

  return (
    <div className="px-[5rem] py-[5rem]">
      <div className="flex flex-col justify-center items-center py-8">
        <h1 className="text-primary-0 font-Labora font-bold text-[2.5rem] text-center">
          Projects
        </h1>
        <div className="bg-secondary-0 w-12 h-2 rounded-full"></div>
        <p className="font-poppins text-secondary-0 mt-4 text-center w-[75%]">
          A showcase of some of the impactful projects I’ve worked on,
          highlighting my skills in both creative design and frontend
          development. From crafting engaging visuals to building functional web
          applications, these projects reflect my versatility and dedication to
          delivering quality solutions.
        </p>
      </div>

      <div className="flex justify-between gap-6 mt-8">
        <Project
          img={Finham}
          project="Finham"
          description="Simplifying global tuition payments with a frictionless platform for managing international education transactions. Built as a frontend developer focusing on UI and functionality."
          tools={[
            "JavaScript",
            "React",
            "TailwindCSS",
            "Firebase",
            "Framer Motion",
          ]}
          button="View Project"
          onButtonClick={() => openModal(<FinhamCaseStudy />)}
        />

        <Project
          img={Wealth}
          project="Wealth"
          description="A financial advisory web app offering tools for financial planning, health, education, and retirement. Built as a personal project with React, Firebase, and TailwindCSS."
          tools={["JavaScript", "React", "TailwindCSS", "Firebase"]}
          button="View Project"
          onButtonClick={() => openModal(<WealthCaseStudy />)}
        />

        <Project
          img={Ensome}
          project="Ensome"
          description="A multi-page data web solution website built during the early stages of my frontend development journey using HTML, CSS, and JavaScript. Responsive and clean web pages."
          tools={["JavaScript", "HTML5", "CSS3", "Firebase"]}
          button="View Project"
          onButtonClick={() => openModal(<EnsomeCaseStudy />)}
        />
      </div>

      <div className="flex justify-between gap-6 mt-[5rem]">
        <Project
          img={Finspa}
          project="Finspa"
          description="Contracted as a creative designer for Finspa, a financial company specializing in loans, investments, and savings. Delivered 100% of the company’s designs, from social media to marketing materials."
          tools={[
            "Adobe PhotoShop",
            "Adobe Illustrator",
            "After Effects",
            "Premiere Pro",
            "Canva"
          ]}
          button="View Project"
          onButtonClick={() => openModal(<FinspaCaseStudy />)}
        />

        <Project
          img={PureMatch}
          project="Pure Match"
          description="Designed the logo and brand visuals for Pure Match, a halal matchmaking app, while also contributing to social media designs and marketing strategies."
          tools={["Adobe PhotoShop", "Adobe Illustrator", "After Effects"]}
          button="View Project"
          onButtonClick={() => openModal(<PureMatchCaseStudy />)}
        />

        <Project
          img={AWAHBooks}
          project="AWAH Books"
          description="Developed the logo and branding materials for AWAH Books, a global storytelling and publishing platform, along with pitch deck slides and future marketing designs."
          tools={[
            "Adobe PhotoShop",
            "Adobe Illustrator",
            "Canva",
            "After Effects",
          ]}
          button="View Project"
          onButtonClick={() => openModal(<AwahBooksCaseStudy />)}
        />
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {activeCaseStudy}
      </Modal>
    </div>
  );
};

export default ProjectSection;
