import AdetunjiLogo from "../assets/Adetunji logo white.svg";

const Footer = () => {
    return (
        <div className="bg-primary-0 flex flex-col justify-center items-center">
            <div className="pt-[7rem] mb-8">
                <img className="w-8" src={AdetunjiLogo} alt="" />
            </div>
            <div className="w-[40%]">
                <p className="text-center text-[1.1rem] font-poppins">Living, learning, and leveling up as a frontend developer and creative designer, one day at a time.</p>
            </div>
        </div>
    )
}

export default Footer