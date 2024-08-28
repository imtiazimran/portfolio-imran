import { useTransform, MotionValue } from "framer-motion";

function useSkillTransform(
  scrollYProgress: MotionValue<number>,
  index: number
) {
  const y = useTransform(scrollYProgress, [0, 1], [index * 30, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2 + index * 0.1], [0, 1]);

  return { y, opacity };
}


export default useSkillTransform