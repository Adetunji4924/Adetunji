// import { useEffect, useRef, useState } from 'react';
// import { useTransform, useScroll, motion } from 'framer-motion';
// import Lenis from '@studio-freight/lenis';
// import '../index.css'; // Assuming you have a CSS file for styles

// const images = [
//   "Artboard 10.png",
//   "Artboard 11.png",
//   "Artboard 13.png",
//   "Artboard 14.png",
//   "Artboard 15.png",
//   "Artboard 16.png",
//   "Artboard 17.png",
//   "Artboard 18.png",
//   "Artboard 19.png",
//   "Artboard 11.png",
//   "Artboard 10.png",
//   "Artboard 17.png",
// ];

// const ImageGallery = () => {
//   const gallery = useRef(null);
//   const [dimension, setDimension] = useState({ width: 0, height: 0 });

//   const { scrollYProgress } = useScroll({
//     target: gallery,
//     offset: ['start end', 'end start']
//   });

//   const { height } = dimension;
//   const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
//   const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
//   const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
//   const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

//   useEffect(() => {
//     const lenis = new Lenis();

//     const raf = (time) => {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     };

//     const resize = () => {
//       setDimension({ width: window.innerWidth, height: window.innerHeight });
//     };

//     window.addEventListener("resize", resize);
//     requestAnimationFrame(raf);
//     resize();

//     return () => {
//       window.removeEventListener("resize", resize);
//     };
//   }, []);

//   return (
//     <main className="main">
//       <div className="spacer"></div>
//       <div ref={gallery} className="gallery">
//         <Column images={[images[0], images[1], images[2]]} y={y} />
//         <Column images={[images[3], images[4], images[5]]} y={y2} />
//         <Column images={[images[6], images[7], images[8]]} y={y3} />
//         <Column images={[images[9], images[10], images[11]]} y={y4} />
//       </div>
//       <div className="spacer"></div>
//     </main>
//   );
// }

// const Column = ({ images, y }) => {
//   return (
//     <motion.div 
//       className="column"
//       style={{ y }}
//     >
//       {images.map((src, i) => (
//         <div key={i} className="imageContainer">
//           <img 
//             src={(`./assets/images-slide/${src}`)} // Adjust based on your file structure
//             alt='image'
//             style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//           />
//         </div>
//       ))}
//     </motion.div>
//   );
// };

// export default ImageGallery;

import { useEffect, useRef, useState } from 'react';
import { useTransform, useScroll, motion } from 'framer-motion';
// import Lenis from '@studio-freight/lenis';
import '../index.css';

const images = [
  "Artboard 10.png",
  "Artboard 11.png",
  "Artboard 13.png",
  "Artboard 14.png",
  "Artboard 15.png",
  "Artboard 16.png",
  "Artboard 17.png",
  "Artboard 18.png",
  "Artboard 19.png",
  "Artboard 11.png",
  "Artboard 10.png",
  "Artboard 17.png",
];

const ImageGallery = () => {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  // Initialize Lenis and set up the animation frame
  useEffect(() => {
    let isScrolling = false;
    let currentScroll = 0;
    let targetScroll = 0;
    const scrollSpeed = 0.1; // Adjust for smoothness (lower is smoother)
  
    const smoothScroll = () => {
      if (!isScrolling) return;
  
      currentScroll += (targetScroll - currentScroll) * scrollSpeed;
      window.scrollTo(0, currentScroll);
  
      if (Math.abs(targetScroll - currentScroll) > 0.5) {
        requestAnimationFrame(smoothScroll);
      } else {
        currentScroll = targetScroll;
        isScrolling = false;
      }
    };
  
    const handleScroll = () => {
      isScrolling = true;
      targetScroll = window.scrollY;
      if (!isScrolling) {
        requestAnimationFrame(smoothScroll);
      }
    };
  
    const handleResize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };
  
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    handleResize();
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  

  return (
    <main className="main">
      <div className="spacer"></div>
      <div ref={gallery} className="gallery">
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
      </div>
      <div className="spacer"></div>
    </main>
  );
}

const Column = ({ images, y }) => {
  return (
    <motion.div 
      className="column"
      style={{ y }}
    >
      {images.map((src, i) => (
        <div key={i} className="imageContainer">
          <img 
  src={`/images-slide/${src}`} // Access images directly from public
  alt="image"
  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
/>
        </div>
      ))}
    </motion.div>
  );
};

export default ImageGallery;
