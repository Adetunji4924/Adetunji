import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuSlide } from "./animation";

const SlidingModal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable page scroll
    } else {
      document.body.style.overflow = ""; // Enable page scroll
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />

          {/* Modal */}
          <motion.div
            className="fixed top-0 right-0 bg-background-0 shadow-lg w-[80%] md:w-[50%] lg:w-[40%] z-50 h-full overflow-y-auto"
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            {/* Close Button */}
            
              <svg onClick={onClose}
              className="absolute top-8 left-4 fill-primary-0 font-bold text-[1.2rem] w-8 cursor-pointer hover:fill-white transition-all delay-75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"/></svg>

            {/* Modal Content */}
            <div className="p-3 md:p-6 h-screen overflow-y-auto">{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SlidingModal;
