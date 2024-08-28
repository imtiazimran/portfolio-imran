import {  useRef } from 'react';
import Card from './Card';
import { useScroll } from 'framer-motion'
import { useGetProjectsQuery } from '@/redux/features/projects/project.api';
import { TProject } from '@/types/projects.types';
const ProfessionalProject = () => {

  const {data, isLoading} = useGetProjectsQuery("professional")

  const projects = data?.data 
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

 


if(isLoading) return <div>Loading...</div>

  return (
    <div ref={container} className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className='lg:text-5xl py-5 text-white'>Internship Projects</h1>
      {projects.map((project: TProject, i: number) => {
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
