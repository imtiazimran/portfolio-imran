import { motion } from "framer-motion";
import { useState } from "react";
import useMousePosition from "@/utils/useMousePosition";
import styles from "./page.module.scss";
const WhoAmI = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <main className={`${styles.main} text-xl md:text-5xl`}>
      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${(x as unknown as number) - size / 2}px ${
            (y as unknown as number) - size / 2
          }px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          A self-taught MERN stack developer with 3+ years of experience,
          skilled in TypeScript, Mongoose, Framer Motion, and Redux. Currently
          learning PostgreSQL, Prisma, and Next.js. Completed 2 courses and an
          internship to enhance my skills.
        </p>
      </motion.div>

      <div className={`${styles.body} text-xl md:text-5xl `}>
        <p>
          Experienced MERN stack developer with 3+ years in the field,
          proficient in TypeScript, Mongoose, Framer Motion, and Redux. Actively
          learning PostgreSQL, Prisma, and Next.js. Strengthened skills through
          2 courses and an internship.
        </p>
      </div>
    </main>
  );
};

export default WhoAmI;
