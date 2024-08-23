import { useRef } from 'react';
import Card from './Card';
import { useScroll } from 'framer-motion'
import prepeat from '../../../assets/image/prepeat.png'
const ProfessionalProject = () => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  const projects = [
    {
      title: 'Prepeat',
      description: 'A system designed to give service to the customer on monthly basis. Features include adding services, deleting services, editing services, and booking services. and the services are booking food for 1 to 3 time per day upto 1 month.  Customer also can book other services like Book laundry services, book chef for occasion. etc. ',
      image: prepeat,
      links: [
        { label: 'Live Site', url: 'https://prepeat.in' },
        { label: 'Figma', url: 'https://www.figma.com/design/5WdmiPad2kxKvA8FIql91n/PrepEat?node-id=0-1&t=wK4jKZ2woC4AX1hf-0' },
      ],
      company: [
        { label: 'Company', text: 'Ricoz.in' },
        { label: 'Project', text: 'https://prepeat.in' },
        {label: 'Role', text: 'Backend Developer/Full Stack Developer', },
      ],
      color: '#f8b400',
    }
    
  ];

  return (
    <div ref={container} className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className='lg:text-5xl py-5 text-white'>Internship Projects</h1>
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

export default ProfessionalProject;
