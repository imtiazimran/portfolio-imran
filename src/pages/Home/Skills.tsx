import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiTypescript,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiNetlify,
  SiNodedotjs,
} from "react-icons/si";
import Container from "@/utils/Container";

const skills = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "TypeScript", icon: SiTypescript, color: "#007ACC" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", icon: SiNodedotjs, color: "#717eaf" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
];

const Skills = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <Container className=" flex-col mb-[650px] md:mb-0 ">
      <div ref={containerRef} className="min-h-screen py-20">
        <h2 className="text-center text-3xl font-bold mb-12 text-white ">
          My Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {skills?.map((skill, index) => {
            const Icon = skill.icon;
            const fromLeft = index % 2 === 0;

            const cardVariant = {
              hidden: { opacity: 0, x: fromLeft ? -50 : 50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            };

            return (
              <motion.div
                key={skill.name}
                className="w-40 h-40 flex flex-col justify-center items-center bg-gray-800 text-white rounded-lg shadow-lg"
                style={{ scale }}
                variants={cardVariant}
                initial="hidden"
                animate="visible"
              >
                <Icon size={48} color={skill.color} />
                <p className="mt-2 text-lg">{skill.name}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Skills;
