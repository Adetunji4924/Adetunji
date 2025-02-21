import { useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import ParticlesComponent from "./components/particles"
import developer from "././assets/Coding concept illustration.svg";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("YOUR_BACKEND_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSuccess(false);
      }
    } catch (error) {
      setSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div>
        <ParticlesComponent className="-z-20 absolute h-[100%] w-[100%]"></ParticlesComponent>
      <Header />
      <div className="flex items-center justify-between gap-2 px-[5rem]">
        <div className="w-[50%] z-10">
          <img src={developer} alt="" />
        </div>
        <div className="w-[50%]">
            <h1 className="font-Labora text-white text-[3rem]">Contact Adetunji</h1>
            <p className="font-poppins text-secondary-0 text-[.8rem] mb-8">Get in touch with me or shoot me an email directly on <span className="font-bold">adewoleadetunji77@gmail.com</span></p>
          <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="border bg-transparent border-tertiary-0 font-poppins text-secondary-0 px-2 py-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-0"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="border bg-transparent border-tertiary-0 font-poppins text-secondary-0 px-2 py-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-0"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows="5"
              className="border bg-transparent border-tertiary-0 font-poppins text-secondary-0 px-2 py-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-0"
            ></textarea>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary-0 text-white py-4 font-poppins rounded-md hover:bg-primary-1"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {success === true && (
              <p className="text-green-500 text-center mt-2">
                Message sent successfully!
              </p>
            )}
            {success === false && (
              <p className="text-red-500 text-center mt-2">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactMe;
