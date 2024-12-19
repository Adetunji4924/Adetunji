import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { menuSlide } from "./animation";
import LinkComponent from "./link";

const navItems = [
  {
    title: "Home",
    href: "/",
    type: "page", // Links to a new page
  },
  {
    title: "About",
    href: "about", // Links to a section
    type: "section",
  },
  {
    title: "Experience",
    href: "experience",
    type: "section",
  },
  {
    title: "Projects",
    href: "projects",
    type: "section",
  },
  {
    title: "Contact Me",
    href: "/contact-me",
    type: "page",
  },
];

const Navigation = ( {refs} ) => {
  const location = useLocation;
  const [selectedIndicator, setSelectedIndicator] = useState(location.pathname);

  useEffect(() => {
    setSelectedIndicator(location.pathname);
  }, [location]);
  

  const openTwitter = () => {
    window.open("https://x.com/Moh_Adetunji/", "_blank")
  };

  const openInstagram = () => {
    window.open("https://www.instagram.com/moh_adetunji/", "_blank")
  };

  const openGithub = () => {
    window.open("https://github.com/Adetunji4924", "_blank")
  };

  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/adewole-muhammed-3a86b723a/", "_blank")
  };

  const scrollToSection = (key) => {
    const ref = refs[key];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-screen bg-primary-0 fixed top-0 right-0 z-20"
    >
      {/* body styles here */}
      <div className="flex flex-col p-24 justify-between h-full box-border">
        {/* nav styles here */}
        <div
          onMouseLeave={() => {
            setSelectedIndicator(location.pathname);
          }}
          className="flex flex-col text-[2rem] mt-20 gap-3 font-Labora text-background-0"
        >
          {/* header style here */}
          <div className="border-b border-solid border-white text-[0.8rem] text-white font-poppins font-semibold">
            <p>Navigation</p>
          </div>

          {navItems.map((data, index) => (
            <LinkComponent
              key={index}
              data={{ ...data, index }}
              isActive={selectedIndicator === data.href}
              setSelectedIndicator={setSelectedIndicator}
              scrollToSection={scrollToSection}
            />
          ))}
        </div>

        <div className="flex w-[100%] justify-between gap-4 text-[0.8rem]">
          <a onClick={openTwitter} className="font-poppins text-white cursor-pointer">X</a>

          <a onClick={openInstagram} className="font-poppins text-white cursor-pointer">Instagram</a>

          <a onClick={openGithub} className="font-poppins text-white cursor-pointer">GitHub</a>

          <a onClick={openLinkedIn} className="font-poppins text-white cursor-pointer">LinkedIn</a>
        </div>
      </div>
    </motion.div>
  );
};

export default Navigation;