import logomiddle from ".././assets/Adetunji svg.svg";
import logofront from ".././assets/Asset 1.svg";
import logoback from ".././assets/Asset 2.svg";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import MenuToggle from "./menu-toggle";
import Navigation from "./navigation";
import { Link } from "react-router-dom";

const Header = ({refs}) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    setSticky(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div
      className={`${
        isSticky ? "fixed top-0 left-0 w-full z-20 bg-background-0 shadow-sm shadow-tertiary-0 py-0" : "relative"
      } transition-all duration-300 ease-in-out px-[1rem] md:px-[3rem] lg:px-[5rem] flex justify-between items-center py-2`}
    >
      <Link to="/" relative="path">
      <div className="flex justify-center items-center gap-1">
        <motion.img
          className="w-9 md:w-16"
          src={logofront}
          alt=""
          animate={{
            x: isSticky ? 20 : 0, // Shift to the right on sticky
            opacity: isSticky ? 0 : 1, // Fade out on sticky
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />

        <img className="w-3 md:w-5" src={logomiddle} alt="" />

        <motion.img
          className="w-7 md:w-12"
          src={logoback}
          alt=""
          animate={{
            x: isSticky ? -20 : 0, // Shift to the left on sticky
            opacity: isSticky ? 0 : 1, // Fade out on sticky
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </div>
      </Link>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        ref={containerRef}
      >
        <MenuToggle toggle={toggleOpen} />
        <AnimatePresence mode="wait">
          {isOpen && <Navigation refs={refs} />}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Header;
