
import { motion } from 'framer-motion';
import Container from '@/utils/Container';
import avatar from '../../assets/image/1719953282836-removebg-preview.png';
import arrow from '../../assets/image/Vector.png'
const Intro = () => {
    return (
        <Container className="flex py-10  flex-col lg:flex-row items-center text-white border-b-2">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex justify-center items-center relative"
            >
                <div className="relative rounded-full w-40 h-40 lg:w-56 lg:h-56">
                    <div className="absolute inset-0 rounded-full bg-gradient-radial from-purple-500 to-transparent"></div>
                    <img src={avatar} alt="avatar" className="relative rounded-full w-full h-full object-cover" />
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-4 lg:mt-0 relative lg:ml-10 text-center lg:text-left"
            >
                <h1 className="text-3xl font-bold text-white flex">
                    <img className='absolute left-[-40px] w-10 hidden lg:block' src={arrow} alt="" />
                    <span>Hi, I'm Imran</span>
                </h1>
                <h2 className="text-2xl font-semibold mt-2 text-white">A Developer who</h2>
                <h3 className="text-4xl font-extrabold mt-2 text-white">
                    Judges a book by its <span className="text-purple-400 underline">cover</span>...
                </h3>
                <p className="mt-2 text-lg text-white">Because if the cover does not impress you what else can?</p>
            </motion.div>
        </Container>
    );
};

export default Intro;
