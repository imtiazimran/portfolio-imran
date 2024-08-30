import { useScroll, motion, useSpring } from "framer-motion";

const UseScroll = () => {
    const {scrollYProgress} = useScroll()
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });
    return (
        <div>
          <motion.div style={{scaleX}} className="progress-bar w-full h-2 z-40 bg-red-600 fixed"></motion.div>
        </div>
    );
};

export default UseScroll;
