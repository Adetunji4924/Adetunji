import logo from ".././assets/Adetunji full.svg";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import MenuToggle from "./menu-toggle";
import Navigation from "./navigation";

const Header = () => {
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
    <div className={`${
      isSticky ? "fixed top-0 left-0 w-full z-20" : ""
    } flex justify-between items-center py-4 relative`}>
      <div>
        <img className="w-32" src={logo} alt="" />
      </div>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        ref={containerRef}
      >
        <MenuToggle toggle={toggleOpen} />
        <AnimatePresence mode="wait">
          {isOpen && <Navigation />}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Header;
