import About from "./about-me"
import Hero from "./hero"
import ImageGallery from "./image-scroll"
import ProjectSection from "./projects-sec"

const Body = ( {refs} ) => {
   

  const scrollToProjects = () => {
    refs.projects.current?.scrollIntoView({ behavior: "smooth" });
  };
    return (
        <div className="relative">
            <Hero onViewProjectsClick={scrollToProjects} />
            <ImageGallery />
            <div ref={refs.about}>
            <About />
            </div>
            <div ref={refs.projects}>
            <ProjectSection />
            </div>
        </div>
    )
}

export default Body