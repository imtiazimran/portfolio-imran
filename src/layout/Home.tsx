import ContactForm from "@/pages/Home/Contact";
import Intro from "@/pages/Home/Intro";
import Nav from "@/pages/Home/Nav";
import ProjectShowcase from "@/pages/Home/Projects/PersonalProject";
import ProfessionalProject from "@/pages/Home/Projects/ProfessionalProjects";
import Skills from "@/pages/Home/Skills";
import WhoAmI from "@/pages/Home/WhoAmI";
import UseScroll from "@/utils/UseScroll";
import { Element } from "react-scroll";

const Home = () => {
    return (
        <div>
            <UseScroll/>
            <Nav />
            <div className="">

                <Element name="sec1" >
                    <Intro />
                </Element>
                <Element name="sec2" >
                    <WhoAmI />
                </Element>
                <Element name="sec3" >
                    <Skills />
                </Element>
                <Element name="sec4" >
                    <ProjectShowcase />
                    <ProfessionalProject/>
                </Element>
                <Element name="sec5" >
                    <ContactForm />
                </Element>
            </div>
        </div>
    );
};

export default Home;