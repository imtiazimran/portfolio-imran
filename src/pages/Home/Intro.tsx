import { motion } from "framer-motion";
import Container from "@/utils/Container";
import avatar from "../../assets/image/1719953282836-removebg-preview.png";
import arrow from "../../assets/image/Vector.png";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";
const Intro = () => {
  const intro = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.25,
        delayChildren: 1,
      },
    },
  };

  const introItems = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        bounch: 0.5,
      },
    },
  };

  const heroImg = {
    initial: {
      y: 0,
      scale: 5,
    },
    animate: {
      y: 20,
      scale: 1,
      transition: {
        duration: 0.75,
        y: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      },
    },
  };

  return (
    <Container className="flex py-10  justify-evenly flex-col md:flex-row items-center text-white border-b-2">
      <motion.div
        variants={heroImg}
        initial="initial"
        animate="animate"
        className="flex justify-center items-center relative"
      >
        <div className="relative rounded-full w-40 h-40 lg:w-56 lg:h-56">
          <div className="absolute inset-0 rounded-full bg-gradient-radial from-purple-500 to-transparent"></div>
          <img
            src={avatar}
            alt="avatar"
            className="relative rounded-full w-full h-full object-cover"
          />
        </div>
      </motion.div>

      <motion.div
        variants={intro}
        initial="hidden"
        animate="visible"
        className="mt-4 lg:mt-0 relative lg:ml-10 text-center lg:text-left min-w-64"
      >
        <motion.h1
          variants={introItems}
          className="text-3xl font-bold text-white"
        >
          <img
            className="absolute left-[-40px] w-10 hidden lg:block"
            src={arrow}
            alt=""
          />
          <span>Hi, I'm Imran</span>
        </motion.h1>
        <motion.h2
          variants={introItems}
          className="text-2xl font-bold text-gray-300"
        >
          <Typewriter
            words={[
              "Frontend Developer",
              "Backend Developer",
              "Full Stack Developer",
              "MERN Developer",
            ]}
            loop={Infinity}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </motion.h2>

        <motion.div
            variants={introItems}
        >
          <Button className="bg-purple-700 hover:bg-purple-800 my-4">
            Download CV
          </Button>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Intro;
