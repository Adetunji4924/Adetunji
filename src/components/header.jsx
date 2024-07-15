// import { useState } from "react"
import logo from ".././assets/adetunji-logo-web.png"
import { motion, useCycle } from "framer-motion"
import { useRef } from "react";
import MenuToggle from "./menu-toggle";
import Navigation from "./navigation";
import { useDimensions } from "./use-dimensions";

const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
    //   clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

const Header = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
    return (
        <div className="flex justify-between items-center py-4">
            <div>
                <img className="w-32" src={logo} alt="" />
            </div>
            <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed"}
                custom={height}
                ref={containerRef}
            >
                <motion.div className="absolute bottom-0 top-0 w-[300px] bg-primary-0" variants={sidebar}/>
                <MenuToggle toggle={() => toggleOpen()} />
                <Navigation />
            </motion.nav>
        </div>
    )
}

export default Header