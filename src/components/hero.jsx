import developer from ".././assets/Coding concept illustration.svg";

const Hero = () => {
    return (
        <div className="flex flex-col justify-center items-center pt-[5rem]">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-primary-0 font-Labora text-[2rem] text-center">Hi, I&apos;m Adetunji</h1>
                <h1 className="text-white font-Labora text-[5rem] w-[80%] text-center">Frontend developer</h1>
                <p className="text-white font-poppins text-center w-[70%] font-light">I create pixel-perfect, visually engaging, and accessible digital experiences as a graphic designer and front-end developer.</p>
            </div>
            <div>
                <img className="w-[40rem] p-0" src={developer} alt="" />
            </div>
        </div>
    )
}

export default Hero