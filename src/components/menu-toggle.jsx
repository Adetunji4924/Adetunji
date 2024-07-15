import { useState } from "react";
import { motion, MotionConfig } from "framer-motion";

const MenuToggle = ({toggle}) => {
    const [active, setActive] = useState(false);
    return (
        <div onClick={toggle}>
                {/* <svg id="fi_8369198" height="50" viewBox="0 0 24 24" width="50" xmlns="http://www.w3.org/2000/svg"><path id="menu-right-alt" d="m21 7h-13a1 1 0 0 1 0-2h13a1 1 0 0 1 0 2zm1 5a1 1 0 0 0 -1-1h-18a1 1 0 0 0 0 2h18a1 1 0 0 0 1-1zm0 6a1 1 0 0 0 -1-1h-9a1 1 0 0 0 0 2h9a1 1 0 0 0 1-1z" fill="#86C232"></path></svg> */}
                <MotionConfig 
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                    }}>
                <motion.button
                    initial={false} 
                    onClick={() => setActive((prev) => !prev)} 
                    animate={active ? "open" : "closed"}
                    className="relative hover:bg-tertiary-0 h-16 w-16 rounded-full">
                    <motion.span 
                        style={{
                            left: "calc(50% + 4px)",
                            top: "35%",
                            x: "-50%",
                            y: "-50%",
                        }} 
                        className={`${active ? "w-10" : "w-8"} absolute h-1 bg-primary-0 rounded-full`}
                        variants={{
                            open: {
                                rotate: ["0deg", "0deg", "45deg"],
                                top: ["35%", "50%", "50%"],
                                left: "50%"
                            },
                            closed: {
                                rotate: ["45deg", "0deg", "0deg"],
                                top: ["50%", "50%", "35%"]
                            },
                        }}
                        ></motion.span>
                    <motion.span 
                        style={{
                            left: "50%",
                            top: "50%",
                            x: "-50%",
                            y: "-50%",
                        }} className="absolute h-1 w-10 bg-primary-0 rounded-full"
                        variants={{
                            open: {
                                rotate: ["0deg", "0deg", "-45deg"],
                            },
                            closed: {
                                rotate: ["-45deg", "0deg", "0deg"],
                            },
                        }}></motion.span>
                    <motion.span 
                        style={{
                            left: "calc(50% + 10px)",
                            bottom: "35%",
                            x: "-50%",
                            y: "50%",
                        }} className="absolute h-1 w-5 bg-primary-0 rounded-full"
                        variants={{
                            open: {
                                rotate: ["0deg", "0deg", "45deg"],
                                left: "50%",
                                bottom: ["35%", "50%", "50%"],
                            },
                            closed: {
                                rotate: ["45deg", "0deg", "0deg"],
                                left: "calc(50% + 10px)",
                                bottom: ["50%", "50%", "35%"]
                            },
                        }}
                        ></motion.span>
                </motion.button>
                </MotionConfig>
            </div>
    )
}

export default MenuToggle