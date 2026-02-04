import styled from "styled-components";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const FeaturedWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
    padding: 0 1rem;

    h2 {
        text-align: center;
        margin-bottom: 2rem;
        font-size: 2.8rem;
    }
    
    span{
        color: #f8730d;
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
       display: flex;
        flex-direction: column;
        gap: 4rem; 
        width: 100%;
        max-width: 1100px;
        padding: 0 1rem; grid-template-columns: repeat(2, 1fr);
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
                        desc={item.desc}
                        netlifyUrl={item.netlifyUrl}
                        githubUrl={item.githubUrl}
                    />
                ))}
            </ProjectsContainer>
        </FeaturedWrapper>
    );
}

export default FeaturedProjects;