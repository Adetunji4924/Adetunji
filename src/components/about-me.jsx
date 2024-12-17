import PrimaryButton from "./pri-button";
import Skill from "./skills";

const About = () => {
  return (
    <div className="px-[1rem] md:px-[5rem] py-[5rem]">
      <div className="flex flex-col md:justify-center md:items-center py-8">
        <h1 className="text-primary-0 font-Labora font-bold text-[1.7rem] md:text-[2.5rem] md:text-center">
          About Me
        </h1>
        <div className="bg-secondary-0 w-12 h-2 rounded-full"></div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start gap-8 py-4 md:py-8">
        <div className="w-full md:w-[50%]">
          <p className="text-white font-bold mb-4 text-[1.2rem] md:text-[1.5rem] font-poppins">
            Get to know me!
          </p>
          <p className="text-secondary-0 font-poppins font-light md:w-[90%] mb-4">
            Hi there! I’m a dedicated{" "}
            <span className="font-bold">
              Frontend Developer and Creative Designer{" "}
            </span>
            with a passion for crafting user-friendly digital experiences and
            visually striking designs. My journey started in 2022 when I dived
            into the world of design using Canva, quickly advancing to master
            industry tools like{" "}
            <span className="font-bold">Adobe Illustrator and Photoshop</span>.
            But my curiosity didn’t stop there; soon, I found myself drawn to
            the tech side, starting with{" "}
            <span className="font-bold">HTML and CSS</span>, and gradually
            growing into a skilled Frontend Developer.
          </p>

          <p className="text-secondary-0 font-poppins font-light md:w-[90%] mb-4">
            Today, I’m not just a creator—I’m a problem solver. I blend my
            expertise in frontend development with my eye for design, building
            accessible, responsive user interfaces and brand visuals that don’t
            just look good but work beautifully. Whether it’s a sleek web app or
            a captivating brand identity, I’m here to help businesses connect
            with their audiences in impactful ways.
          </p>
          <PrimaryButton value={"Contact Me"}/>
        </div>

        <Skill />
      </div>
    </div>
  );
};

export default About;
