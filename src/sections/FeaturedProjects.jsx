import styled, { keyframes } from "styled-components";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { useInView } from "react-intersection-observer";

const slideInBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px); 
  }
  to {
    opacity: 1;
    transform: translateY(0); 
  }
`;

const FeaturedWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
    padding: 0 1rem;

    h2 {
        text-align: center;
        margin-bottom: 2rem;
        font-size: 3rem;
    }
    
    span{
        color: #BF5400;
    }
`;

const ProjectsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr; 
    gap: 2rem;
    width: 100%;
    max-width: 1200px; 
    padding: 0 1rem;

    /* Tablet: 2 columns */
    @media (min-width: 650px) {
        grid-template-columns: repeat(2, 1fr);
    }

    /* Desktop: 3 columns */
    @media (min-width: 950px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

function FeaturedProjects() {
    return (
        <FeaturedWrapper>
            <h2>My Latest <span>Projects</span></h2>
            <ProjectsContainer>
                {projects.map((item, index) => (
                    <ProjectCard
                        key={item.id}
                        index={index}
                        img={item.img}
                        title={item.title}
                        netlifyUrl={item.netlifyUrl}
                        githubUrl={item.githubUrl}
                    />
                ))}
            </ProjectsContainer>
        </FeaturedWrapper>
    );
}

export default FeaturedProjects;