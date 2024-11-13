import About from "./about-me"
import Hero from "./hero"
import ImageGallery from "./image-scroll"
import ProjectSection from "./projects-sec"

const Body = () => {
    return (
        <div className="z-10 relative">
            <Hero />
            <ImageGallery />
            <About />
            <ProjectSection />
        </div>
    )
}

export default Body