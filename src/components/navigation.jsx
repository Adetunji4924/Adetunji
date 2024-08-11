import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { menuSlide } from "./animation";
import LinkComponent from "./link";

const navItems = [
  {
    title: "Home",
    href: "/",
  },

  {
    title: "About",
    href: "/about",
  },

  {
    title: "Experience",
    href: "/experience",
  },

  {
    title: "Projects",
    href: "/projects",
  },
];

const Navigation = () => {
  const location = useLocation;
  const [selectedIndicator, setSelectedIndicator] = useState(location.pathname);

  useEffect(() => {
    setSelectedIndicator(location.pathname);
  }, [location]);

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
            />
          ))}
        </div>

        <div className="flex w-[100%] justify-between gap-4 text-[0.8rem]">
          <a className="font-poppins text-white cursor-pointer">X</a>

          <a className="font-poppins text-white cursor-pointer">Instagram</a>

          <a className="font-poppins text-white cursor-pointer">GitHub</a>

          <a className="font-poppins text-white cursor-pointer">LinkedIn</a>
        </div>
      </div>
    </motion.div>
  );
};

export default Navigation;
