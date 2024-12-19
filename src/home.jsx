import Body from "./components/body"
import Footer from "./components/footer"
import Header from "./components/header"
import ParticlesComponent from "./components/particles"
import { useRef } from "react"

const Home = () => {

    const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  const refs = {
    about: aboutRef,
    projects: projectsRef,
  };
    return (
            <div className="bg-background-0 overflow-hidden relative">
                {/* <ParticlesComponent id="particles" /> */}
                <ParticlesComponent className="-z-20 absolute h-[100%] w-[100%]"></ParticlesComponent>
                <Header refs={refs} />
                <Body refs={refs} />
                <Footer />
            </div>
    )
}

export default Home