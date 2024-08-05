import Container from "@/utils/Container";
import { Typewriter } from "react-simple-typewriter";

const WhoAmI = () => {
    return (
        <Container className="text-center flex justify-center items-center text-white w-4/5">
            <div>
                <h1>I am a {" "}
                    <span style={{ color: 'red', fontWeight: 'bold' }}>
                        <Typewriter
                            words={['Frontend', 'Backend', 'Full Stack', 'MERN']}
                            loop={Infinity}
                            cursor
                            cursorStyle='_'
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={2000}
                        />
                    </span>
                    <br />
                    Developer
                </h1>
                <p className="max-w-[500px] leading-8">
                    A self-taught MERN stack developer with over 3 years of experience. I create meaningful and delightful digital products that balance user needs and business goals. Skilled in TypeScript, Mongoose, Framer Motion, Redux, and currently learning PostgreSQL, Prisma, and Next.js. Additionally, I have completed 2 courses and an internship to further enhance my skills.
                </p>
            </div>
        </Container>
    );
};

export default WhoAmI;