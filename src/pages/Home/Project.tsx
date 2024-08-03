import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProjectShowcase = () => {
    const projects = [
        {
            title: 'Example Project 1',
            description: 'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
            image: 'https://theproductmanager.com/wp-content/cache/theproductmanager.com/static/static.crozdesk.com/web-app-library-categories-providers-screenshots-001-098-775-pub-canva-screenshot-1695084229.png',
        },
        {
            title: 'Example Project 2',
            description: 'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
            image: 'https://theproductmanager.com/wp-content/cache/theproductmanager.com/static/static.crozdesk.com/web-app-library-categories-providers-screenshots-001-098-775-pub-canva-screenshot-1695084229.png',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    const textVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    const imageVariants = {
        hidden: { x: 50, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-16 py-10">
            {projects.map((project, index) => {
                const [ref, inView] = useInView({
                    threshold: 0.2,
                });

                return (
                    <motion.div
                        key={index}
                        ref={ref}
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        className="relative bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg flex lg:flex-row flex-col-reverse items-center max-w-4xl w-full"
                    >
                        <motion.div
                            variants={textVariants}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            className="lg:w-1/2 p-4 bg-white bg-opacity-10 lg:backdrop-filter backdrop-blur-lg rounded-md shadow-md border border-white border-opacity-30"
                        >
                            <h3 className="text-white text-2xl mb-2">{project.title}</h3>
                            <p className="text-white mb-4">{project.description}</p>
                            <div className="absolute bottom-4 left-4 flex space-x-2">
                                <span className="text-white">✳️</span>
                                <span className="text-white">✴️</span>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={imageVariants}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            className="lg:w-1/2 p-4"
                        >
                            <motion.img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-auto object-cover rounded-lg transition-transform transform hover:scale-105"
                            />
                        </motion.div>
                        <div className="absolute top-4 left-4 bg-purple-700 text-white p-2 rounded-lg">
                            Featured Project
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default ProjectShowcase;
