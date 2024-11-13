import Project from "./project";
import Finham from ".././assets/Thumbnail.png";

const ProjectSection = () => {
  return (
    <div className="px-[5rem] py-[5rem]">
      <div className="flex flex-col justify-center items-center py-8">
        <h1 className="text-primary-0 font-Labora font-bold text-[2.5rem] text-center">
          Projects
        </h1>
        <div className="bg-secondary-0 w-12 h-2 rounded-full"></div>
        <p>This is a short description</p>
      </div>

      <div className="flex justify-between gap-8 mt-8">
        <Project
          img={Finham}
          project="Finham"
          description="This is a new project and it's all about a payment platform yada yada yada and so on which will be updated later"
          tools={["React", "TailwindCSS", "Firebase", "Framer Motion"]}
        />

        <Project
          img={Finham}
          project="Finham"
          description="This is a new project and it's all about a payment platform yada yada yada and so on which will be updated later"
          tools={["React", "TailwindCSS", "Firebase", "Framer Motion"]}
        />

        <Project
          img={Finham}
          project="Finham"
          description="This is a new project and it's all about a payment platform yada yada yada and so on which will be updated later"
          tools={["React", "TailwindCSS", "Firebase", "Framer Motion"]}
          value
        />
      </div>
    </div>
  );
};

export default ProjectSection;
