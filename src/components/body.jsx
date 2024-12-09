import About from "./about-me"
import Hero from "./hero"
import ImageGallery from "./image-scroll"
import ProjectSection from "./projects-sec"
import { useRef } from "react";

const Body = () => {
   
    const projectSectionRef = useRef(null);

  const scrollToProjects = () => {
    projectSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
    return (
        <div className="relative">
            <Hero onViewProjectsClick={scrollToProjects} />
            <ImageGallery />
            <About />
            <div ref={projectSectionRef}>
            <ProjectSection />
            </div>
        </div>
    )
}

export default Body