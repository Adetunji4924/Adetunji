import Body from "./components/body"
import Footer from "./components/footer"
import Header from "./components/header"
import ParticlesComponent from "./components/particles"

const Home = () => {
    return (
            <div className="bg-background-0 overflow-hidden relative">
                {/* <ParticlesComponent id="particles" /> */}
                <ParticlesComponent className="-z-20 absolute h-[100%] w-[100%]"></ParticlesComponent>
                <Header />
                <Body />
                <Footer />
            </div>
    )
}

export default Home