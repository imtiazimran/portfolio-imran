import Intro from "@/pages/Home/Intro";
import Nav from "@/pages/Home/Nav";
import ProjectShowcase from "@/pages/Home/Project";
import Skills from "@/pages/Home/Skills";
import WhoAmI from "@/pages/Home/WhoAmI";

const Home = () => {
    return (
        <div>
            <Nav/>
            <Intro/>
            <WhoAmI/>
            <Skills/>
            <ProjectShowcase/>
        </div>
    );
};

export default Home;