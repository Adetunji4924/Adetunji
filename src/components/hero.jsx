// import developer from ".././assets/Coding concept illustration.svg";
import PrimaryButton from "./pri-button";
// import { useRef } from "react";

const Hero = ({onViewProjectsClick}) => {

    
    return (
        <div className="px-[1rem] md:px-[5rem] flex flex-col justify-center items-center h-screen">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-primary-0 font-poppins text-[1rem] md:text-[2rem] text-center">Hi, I&apos;m Adetunji</h1>
                <h1 className="text-white font-Labora text-[2rem] md:text-[4.5rem] w-full md:w-[90%] text-center leading-[2.5rem] md:leading-[4.5rem] mb-6">Frontend developer & Creative Designer</h1>
                <p className="text-secondary-0 font-poppins text-center w-full md:w-[60%] font-light">I create pixel-perfect, visually engaging, and accessible digital experiences as a graphic designer and front-end developer.</p>
            </div>
            <div className="mt-[5rem]">
                <PrimaryButton onButtonClick={onViewProjectsClick} id={"view-Projects"} value={"View Projects"} />
            </div>
            {/* <div>
                <img className="w-[40rem] p-0" src={developer} alt="" />
            </div> */}
        </div>
    )
}

export default Hero