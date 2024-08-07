import { useRef } from 'react';
import Card from './Card';
import { useScroll } from 'framer-motion'
const ProjectShowcase = () => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  const projects = [
    {
      title: 'Delivery Report (Yunusco)',
      description: 'A system designed to streamline the process of managing orders and deliveries for a garments accessories company. Features include adding jobs, delivery tracking, deleting jobs, daily delivery report, total delivery log, and editing delivery details.',
      image: 'https://theproductmanager.com/wp-content/cache/theproductmanager.com/static/static.crozdesk.com/web-app-library-categories-providers-screenshots-001-098-775-pub-canva-screenshot-1695084229.png',
      links: [
        { label: 'Live Site', url: 'https://example.com/live-site' },
        { label: 'Front-end Code', url: 'https://example.com/frontend-code' },
        { label: 'Back-end Code', url: 'https://example.com/backend-code' },
      ],
      color: '#f8b400',
    },
    {
      title: 'FrostFit',
      description: 'Comprehensive platform for managing winter clothes distribution to communities in need. Features authentication, private dashboard, dynamic charts, and responsive design.',
      image: 'https://theproductmanager.com/wp-content/cache/theproductmanager.com/static/static.crozdesk.com/web-app-library-categories-providers-screenshots-001-098-775-pub-canva-screenshot-1695084229.png',
      links: [
        { label: 'Live Site', url: 'https://example.com/live-site' },
        { label: 'Front-end Code', url: 'https://example.com/frontend-code' },
        { label: 'Back-end Code', url: 'https://example.com/backend-code' },
      ],
      color: '#00a8e8',
    },
    {
      title: 'Book Tickets Management',
      description: 'A platform for bus ticket management, designed for bus management teams and owners to oversee seat bookings. Features real-time seat booking updates, secure booking management, and responsive design.',
      image: 'https://theproductmanager.com/wp-content/cache/theproductmanager.com/static/static.crozdesk.com/web-app-library-categories-providers-screenshots-001-098-775-pub-canva-screenshot-1695084229.png',
      links: [
        { label: 'Live Site', url: 'https://example.com/live-site' },
        { label: 'Front-end Code', url: 'https://example.com/frontend-code' },
        { label: 'Back-end Code', url: 'https://example.com/backend-code' },
      ],
      color: '#ff6f61',
    },
    {
      title: 'Chef\'s Conclave',
      description: 'A platform that unites chefs, fosters collaboration, and celebrates the art of culinary creation. Chefs can write blogs, share unique recipes, and showcase their finest culinary creations while engaging with a supportive community.',
      image: 'https://theproductmanager.com/wp-content/cache/theproductmanager.com/static/static.crozdesk.com/web-app-library-categories-providers-screenshots-001-098-775-pub-canva-screenshot-1695084229.png',
      links: [
        { label: 'Live Site', url: 'https://example.com/live-site' },
        { label: 'Server Code', url: 'https://example.com/server-code' },
        { label: 'Client Code', url: 'https://example.com/client-code' },
      ],
      color: '#d4a5a5',
    },
    {
      title: 'Toy Galaxy',
      description: 'An online toy shopping destination developed using the MERN stack. Features a secure login system using Firebase, robust backend for data management, product inventory, and order processing.',
      image: 'https://theproductmanager.com/wp-content/cache/theproductmanager.com/static/static.crozdesk.com/web-app-library-categories-providers-screenshots-001-098-775-pub-canva-screenshot-1695084229.png',
      links: [
        { label: 'Live Site', url: 'https://example.com/live-site' },
        { label: 'Server Code', url: 'https://example.com/server-code' },
        { label: 'Client Code', url: 'https://example.com/client-code' },
      ],
      color: '#ffcc00',
    },
    {
      title: 'Sorcery Summer School',
      description: 'An online academy integrating Stripe.js for secure and convenient payment processing. Offers captivating courses in magic with a seamless and user-friendly payment experience.',
      image: 'https://theproductmanager.com/wp-content/cache/theproductmanager.com/static/static.crozdesk.com/web-app-library-categories-providers-screenshots-001-098-775-pub-canva-screenshot-1695084229.png',
      links: [
        { label: 'Live Site', url: 'https://example.com/live-site' },
        { label: 'Server Code', url: 'https://example.com/server-code' },
        { label: 'Client Code', url: 'https://example.com/client-code' },
      ],
      color: '#ff5733',
    }
  ];

  return (
    <div ref={container} className="min-h-screen flex flex-col items-center justify-center gap-16 py-10 px-4">
      {projects.map((project, i) => {
        const target = 1 - ((projects.length - i) * 0.05)
        return (
          <Card
            src={project.image}
            key={i}
            {...project}
            i={i}
            range={[i * 0.25, 1]}
            target={target}
            progress={scrollYProgress} />
        )
      })

      }
    </div>


  );
};

export default ProjectShowcase;
