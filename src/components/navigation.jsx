import { motion } from "framer-motion";
import MenuItem from "./menu-item";

const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

const Navigation = () => (
    <motion.ul className="absolute" variants={variants}>
      {itemIds.map(i => (
        <MenuItem i={i} key={i} />
      ))}
    </motion.ul>
  );

  export default Navigation
  
  const itemIds = [0, 1, 2];