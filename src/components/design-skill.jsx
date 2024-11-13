const DesignSkill = ({designSkillData}) => {
    return(
        <div className="flex flex-wrap gap-2 mt-8">
            {designSkillData.map((item, index) => (
                <div key={index} className="flex items-center rounded-full px-4 py-1 border border-primary-0">
                <p className="text-[.8rem] font-poppins text-secondary-0">{item}</p>
            </div>
            ))}
        </div>
    )
}

export default DesignSkill