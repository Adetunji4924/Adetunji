// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { slide, scale } from "./animation";

// const LinkComponent = ({ data, isActive, setSelectedIndicator }) => {
//   const { title, href, index } = data;

//   return (
//     <motion.div
//       className="flex relative items-center"
//       onMouseEnter={() => {
//         setSelectedIndicator(href);
//       }}
//       custom={index}
//       variants={slide}
//       initial="initial"
//       animate="enter"
//       exit="exit"
//     >
//       <motion.div
//         variants={scale}
//         animate={isActive ? "open" : "closed"}
//         // indicator style
//         className="w-2 h-2 bg-white rounded-[50%] absolute -left-8"
//       ></motion.div>

//       <Link href={href}>{title}</Link>
//     </motion.div>
//   );
// };

// export default LinkComponent;

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { slide, scale } from "./animation";

const LinkComponent = ({ data, isActive, setSelectedIndicator, scrollToSection }) => {
  const { title, href, type, index } = data;

  const handleClick = () => {
    if (type === "section") {
      scrollToSection(href); // Pass only the key (e.g., "about"), no `#`
    } else {
      setSelectedIndicator(href);
    }
  };

  return (
    <motion.div
      className="flex relative items-center"
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className="w-2 h-2 bg-white rounded-[50%] absolute -left-8"
      ></motion.div>

      {type === "page" ? (
        <Link to={href}>{title}</Link>
      ) : (
        <a onClick={handleClick} style={{ cursor: "pointer" }}>
          {title}
        </a>
      )}
    </motion.div>
  );
};

export default LinkComponent;
