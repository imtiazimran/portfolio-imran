import { useScroll, motion } from "framer-motion";

const UseScroll = () => {
    const {scrollYProgress} = useScroll()
    return (
        <div>
          <motion.div style={{scaleX: scrollYProgress}} className="w-full h-2 z-40 bg-red-600 fixed"></motion.div>
        </div>
    );
};

export default UseScroll;
