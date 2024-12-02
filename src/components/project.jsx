// import PrimaryButton from "./pri-button";

const Project = ( {img, project, description, tools, button,onButtonClick}) => {
  return (
    <div className="pb-6 shadow-md shadow-tertiary-0 rounded-xl w-[35%]">
      <div>
        <img className="rounded-t-xl h-60 w-full" src={img} alt="" />
      </div>
      <div className="px-4 py-4">
        <h1 className="font-poppins font-semibold text-[1.2rem] text-white pb-2">{project}</h1>
        <p className="font-poppins text-secondary-0 text-[.9rem]">{description}</p>
        <div className="flex flex-wrap gap-2 mt-8"></div>
        <div className="flex flex-wrap gap-2 mt-4">
          {tools.map((tool, index) => (
            <span 
              key={index} 
              className="flex items-center rounded-full px-4 py-1 border border-primary-0 text-[.8rem] font-poppins text-secondary-0"
            >
              {tool}
            </span>
          ))}
        </div>
        <div className="mt-2">
            <button onClick={onButtonClick} className="bg-primary-0 text-white px-8 py-3 rounded-md mt-4 font-poppins font-semibold">{button}</button>
        </div>
      </div>
    </div>
  );
};

export default Project;
