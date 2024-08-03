import Container from '@/utils/Container';
import skills from '../../assets/image/Skills.png'
const Skills = () => {
    return (
        <Container>
            <div className='text-white '>
                <h1>Skills</h1>
                <div className='p-2 lg:w-[60%] mx-auto'>
                    <img src={skills} alt="" />
                </div>
            </div>
        </Container>
    );
};

export default Skills;