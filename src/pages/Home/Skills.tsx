import Container from "@/utils/Container";
import skills from "../../assets/image/Skills.png";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [0.5, 1.5]);

  return (
    <Container>
      <div className="text-white">
        <h1>Skills</h1>
        <div ref={imgRef} className="p-2 lg:w-[60%] mx-auto">
          <motion.img
            style={{ scale: imageScale }}
            src={skills}
            alt="Skills"
            className="w-full h-auto"
          />
        </div>
      </div>
    </Container>
  );
};

export default Skills;
