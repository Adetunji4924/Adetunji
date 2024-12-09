const PrimaryButton = ({id, value, onButtonClick}) => {
  return (
    <button
      className="bg-primary-0 text-white px-12 py-4 rounded-md mt-4 font-poppins font-semibold"
      id={id}
      onClick={onButtonClick}
    >
      {value}
    </button>
  );
};

export default PrimaryButton;
