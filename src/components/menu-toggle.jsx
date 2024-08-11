import { useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import PropTypes from "prop-types";

const MenuToggle = ({ toggle }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive((prev) => !prev);
    toggle();
  };

  return (
    <div onClick={handleClick}>
      <MotionConfig
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <motion.button
          initial={false}
          animate={active ? "open" : "closed"}
          className="relative hover:bg-tertiary-0 h-16 w-16 rounded-full z-40"
        >
          <motion.span
            style={{
              left: "calc(50% + 4px)",
              top: "35%",
              x: "-50%",
              y: "-50%",
            }}
            className={`${
              active ? "w-10 bg-white" : "w-8"
            } absolute h-1 bg-primary-0 rounded-full`}
            variants={{
              open: {
                rotate: ["0deg", "0deg", "45deg"],
                top: ["35%", "50%", "50%"],
                left: "50%",
              },
              closed: {
                rotate: ["45deg", "0deg", "0deg"],
                top: ["50%", "50%", "35%"],
              },
            }}
          ></motion.span>
          <motion.span
            style={{
              left: "50%",
              top: "50%",
              x: "-50%",
              y: "-50%",
            }}
            className={`${active ? "bg-white" : "bg-primary-0"} absolute h-1 w-10 bg-primary-0 rounded-full`}
            variants={{
              open: {
                rotate: ["0deg", "0deg", "-45deg"],
              },
              closed: {
                rotate: ["-45deg", "0deg", "0deg"],
              },
            }}
          ></motion.span>
          <motion.span
            style={{
              left: "calc(50% + 10px)",
              bottom: "35%",
              x: "-50%",
              y: "50%",
            }}
            className={`${active ? "bg-white" : "bg-primary-0"} absolute h-1 w-5 bg-primary-0 rounded-full`}
            variants={{
              open: {
                rotate: ["0deg", "0deg", "45deg"],
                left: "50%",
                bottom: ["35%", "50%", "50%"],
              },
              closed: {
                rotate: ["45deg", "0deg", "0deg"],
                left: "calc(50% + 10px)",
                bottom: ["50%", "50%", "35%"],
              },
            }}
          ></motion.span>
        </motion.button>
      </MotionConfig>
    </div>
  );
};

MenuToggle.propTypes = {
  toggle: PropTypes.func.isRequired,
};

export default MenuToggle;
