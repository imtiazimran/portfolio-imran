import Container from "@/utils/Container";
import skills from "../../assets/image/Skills.png";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start start", "start end"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [0.5, 2]);

  return (
    <Container>
      <div className="text-white">
        <h1 className="text-3xl font-bold mb-4">Skills</h1>
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
