import { useRef } from 'react';
import Card from './Card';
import { useScroll } from 'framer-motion'
import chefConclavePhoto from '../../../assets/image/chefConclave-8817f402.jpeg'
import deliveryReportImage from '../../../assets/image/screencapture-htldelivery-netlify-app-2024-08-07-21_01_28.png'
import frostFitImage from '../../../assets/image/screencapture-frost-fit-vercel-app-2024-08-07-20_26_45.png'
import booktiketImage from '../../../assets/image/screencapture-imunet-vercel-app-2024-08-07-21_08_17.png'
import toyGalaxyImage from '../../../assets/image/toyGalaxy-e33aa83c.jpeg'
import SSSImage from '../../../assets/image/summer-camp.jpeg'
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
      image: deliveryReportImage,
      links: [
        { label: 'Live Site', url: 'https://htldelivery.netlify.app/' },
        { label: 'Server Code', url: 'https://github.com/imtiazimran/Delivery-Report-Yunusco-FrontEnd' },
        { label: 'Client Code', url: 'https://github.com/imtiazimran/Delivery-Report-Yunusco-BackEnd' },
      ],
      color: '#f8b400',
    },
    {
      title: 'FrostFit',
      description: 'Comprehensive platform for managing winter clothes distribution to communities in need. Features authentication, private dashboard, dynamic charts, and responsive design.',
      image: frostFitImage,
      links: [
        { label: 'Live Site', url: 'https://frost-fit.vercel.app/' },
        { label: 'Client Code', url: 'https://github.com/imtiazimran/FrostFit' },
        { label: 'Server Code', url: 'https://github.com/imtiazimran/FrostFit-Backend' },
      ],
      color: '#00a8e8',
    },
    {
      title: 'Book Tickets Management',
      description: 'A platform for bus ticket management, designed for bus management teams and owners to oversee seat bookings. Features real-time seat booking updates, secure booking management, and responsive design.',
      image: booktiketImage,
      links: [
        { label: 'Live Site', url: 'https://imunet.vercel.app' },
        { label: 'Server Code', url: 'https://github.com/imtiazimran/bookTicketBackend' },
        { label: 'Client Code', url: 'https://github.com/imtiazimran/bookTicket' },
      ],
      color: '#ff6f61',
    },
    {
      title: 'Chef\'s Conclave',
      description: 'A platform that unites chefs, fosters collaboration, and celebrates the art of culinary creation. Chefs can write blogs, share unique recipes, and showcase their finest culinary creations while engaging with a supportive community.',
      image: chefConclavePhoto,
      links: [
        { label: 'Live Site', url: 'https://chef-s-conclave.web.app/' },
        { label: 'Server Code', url: 'https://github.com/imtiazimran/Chef-s-Conclave-Fron-end-PHA-10' },
        { label: 'Client Code', url: 'https://github.com/imtiazimran/Chef-s-Conclave-Fron-end-PHA-10' },
      ],
      color: '#d4a5a5',
    },
    {
      title: 'Toy Galaxy',
      description: 'An online toy shopping destination developed using the MERN stack. Features a secure login system using Firebase, robust backend for data management, product inventory, and order processing.',
      image: toyGalaxyImage,
      links: [
        { label: 'Live Site', url: 'https://toygalaxy-6a8a6.web.app/' },
        { label: 'Server Code', url: 'https://github.com/imtiazimran/ToyGalaxy-Back-end' },
        { label: 'Client Code', url: 'https://github.com/imtiazimran/Toy-Galaxy-Front-end-PHA-11' },
      ],
      color: '#ffcc00',
    },
    {
      title: 'Sorcery Summer School',
      description: 'An online academy integrating Stripe.js for secure and convenient payment processing. Offers captivating courses in magic with a seamless and user-friendly payment experience.',
      image: SSSImage,
      links: [
        { label: 'Live Site', url: 'https://summer-camp-school-6fa65.web.app/' },
        { label: 'Server Code', url: 'https://github.com/imtiazimran/SourcerySummerSchool-back-end' },
        { label: 'Client Code', url: 'https://chef-s-conclave.web.app/' },
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
