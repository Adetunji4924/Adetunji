import logo from ".././assets/adetunji-logo-web.png";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import MenuToggle from "./menu-toggle";
import Navigation from "./navigation";

const Header = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  return (
    <div className="flex justify-between items-center py-4">
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
