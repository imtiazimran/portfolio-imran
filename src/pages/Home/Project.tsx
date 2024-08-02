import React from 'react';

const ProjectShowcase = () => {
    const projects = [
        {
            title: 'Example Project',
            description: 'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
            image: 'https://theproductmanager.com/wp-content/cache/theproductmanager.com/static/static.crozdesk.com/web-app-library-categories-providers-screenshots-001-098-775-pub-canva-screenshot-1695084229.png',
        },
        {
            title: 'Example Project',
            description: 'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
            image: 'https://theproductmanager.com/wp-content/cache/theproductmanager.com/static/static.crozdesk.com/web-app-library-categories-providers-screenshots-001-098-775-pub-canva-screenshot-1695084229.png',
        },
    ];

    return (
        <div className="min-h-screen  flex flex-col items-center justify-center gap-16 py-10">
            {projects.map((project, index) => (
                <div key={index} className="relative bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg flex items-center max-w-4xl w-full">
                    <div className="w-1/2 p-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-md shadow-md border border-white border-opacity-30">
                        <h3 className="text-white text-2xl mb-2">{project.title}</h3>
                        <p className="text-white mb-4">{project.description}</p>
                        <div className="absolute bottom-4 left-4 flex space-x-2">
                            <span className="text-white">✳️</span>
                            <span className="text-white">✴️</span>
                        </div>
                    </div>
                    <div className="w-1/2 p-4">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-auto object-cover rounded-lg transition-transform transform hover:scale-105"
                        />
                    </div>
                    <div className="absolute top-4 left-4 bg-purple-700 text-white p-2 rounded-lg">
                        Featured Project
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectShowcase;
