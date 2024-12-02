import Finham from "../assets/Thumbnail.png";
const FinhamCaseStudy = () => {
  return (
    <div className="flex justify-center items-center gap-4">
      <div className="w-1/2">
        <img src={Finham} alt="" />
      </div>
      <div className="w-1/2">
        <h1>Finham Case Study</h1>
        <p>
          Finham is a web application designed to simplify international tuition
          payments, ensuring a seamless experience for users managing education
          transactions across the globe.<br /> <br /> As a frontend developer, I contributed
          by building user interfaces and implementing functionalities such as
          the payment form, admin dashboard, and invoice management system,
          among other key features.<br /> <br /> Collaborating closely with backend
          developers and the product designer, I ensured a cohesive,
          user-friendly experience. The project was built using JavaScript,
          ReactJS, TailwindCSS, React Router, and various libraries to enhance
          frontend functionality. While the platform is currently offline for
          updates and feature enhancements, the experience demonstrated my
          ability to deliver practical solutions and work effectively within a
          development team.
        </p>
      </div>
    </div>
  );
};

export default FinhamCaseStudy;
