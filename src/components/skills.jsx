import DesignSkill from "./design-skill"
import DevSkill from "./dev-skill"

const Skill = () => {

    const devSkillData = ["HTML", "CSS", "JavaScript", "ReactJS", "TailwindCSS", "NextJS"]
    const designSkillData = ["Adobe Photoshop", "Adobe Illustrator", "After Effects", "Premiere Pro"]
    return (
        <div className="md:w-[50%]">
            <h1 className="text-white font-bold mb-2 mt-4 md:mb-4 text-[1.2rem] md:text-[1.5rem] font-poppins">Skills</h1>
            <div className="flex-col md:flex justify-between gap-8 md:gap-4">
                <div className="px-4 py-12 shadow-sm shadow-primary-0 rounded-xl w-full md:w-[50%]">
                    <h1 className="text-[1rem] md:text-[1.2rem] font-semibold font-poppins text-primary-0 mb-4">Frontend Developer</h1>
                    <p className="font-poppins font-light text-[.9rem] text-secondary-0">I build responsive, user-friendly web apps optimized for performance.</p>
                    <DevSkill devSkillData={devSkillData} />
                </div>
                <div className="px-4 py-12 shadow-sm shadow-primary-0 rounded-xl w-full md:w-[50%]">
                    <h1 className="text-[1rem] md:text-[1.2rem] font-semibold font-poppins text-white mb-4">Creative Designer</h1>
                    <p className="font-poppins font-light text-[.9rem] text-secondary-0">I create engaging visuals that bring brands to life, from logos to social media assets and animations.</p>
                    <DesignSkill designSkillData={designSkillData}/>
                </div>
            </div>
        </div>
    )
}

export default Skill