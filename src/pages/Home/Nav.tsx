import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import logo from '../../assets/image/fab.png'
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <div className="z-30 bg-[#1A0B2E] fixed w-full flex justify-between items-center py-3 px-10 text-white">
      <div className="text-lg italic">
    <img className="size-8" src={logo} alt="" />

      </div>
      <div className="hidden md:flex gap-4 cursor-pointer">
        <Link
          activeClass="active"
          to="sec1"
          spy={true}
          smooth={true}
          duration={500}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="sec2"
          spy={true}
          smooth={true}
          duration={500}
        >
          Overview
        </Link>
        <Link
          activeClass="active"
          to="sec3"
          spy={true}
          smooth={true}
          duration={500}
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="sec4"
          spy={true}
          smooth={true}
          duration={500}
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="sec5"
          spy={true}
          smooth={true}
          duration={500}
        >
          Contact
        </Link>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={menuVariants}
          className="md:hidden absolute top-14 left-0 w-full bg-[#1A0B2E] flex flex-col items-center py-4 space-y-4 z-10"
        >
          <Link
            activeClass="active"
            to="sec1"
            spy={true}
            smooth={true}
            duration={500}
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="sec2"
            spy={true}
            smooth={true}
            duration={500}
            onClick={toggleMenu}
          >
            Skills
          </Link>
          <Link
            activeClass="active"
            to="sec3"
            spy={true}
            smooth={true}
            duration={500}
            onClick={toggleMenu}
          >
            Experience
          </Link>
          <Link
            activeClass="active"
            to="sec4"
            spy={true}
            smooth={true}
            duration={500}
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            activeClass="active"
            to="sec5"
            spy={true}
            smooth={true}
            duration={500}
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default Nav;
