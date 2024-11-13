import PrimaryButton from "./pri-button";

const Project = (props) => {
  return (
    <div className="pb-6 shadow-md shadow-tertiary-0 rounded-xl">
      <div>
        <img className="rounded-t-xl h-60" src={props.img} alt="" />
      </div>
      <div className="px-4 py-4">
        <h1 className="font-poppins font-semibold text-[1.2rem] text-white">{props.project}</h1>
        <p className="font-poppins text-secondary-0 text-[.9rem]">{props.description}</p>
        <div className="flex flex-wrap gap-2 mt-8"></div>
        <div className="flex flex-wrap gap-2 mt-4">
          {props.tools.map((tool, index) => (
            <span 
              key={index} 
              className="flex items-center rounded-full px-4 py-1 border border-primary-0 text-[.8rem] font-poppins text-secondary-0"
            >
              {tool}
            </span>
          ))}
        </div>
        <div>
            <PrimaryButton>{props.button}</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Project;
