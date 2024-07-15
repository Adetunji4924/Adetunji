import { motion } from "framer-motion";

const variants = {
    open: {
      y: 0,
      display: "block",
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      display: "none",
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

const MenuItem = () => {
    const menu = ['About', 'Experience', 'Projects']
    return (
        <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        >
            <div value={menu}>About</div>
        </motion.li>
    )
}

export default MenuItem