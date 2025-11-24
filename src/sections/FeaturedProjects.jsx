import styled from "styled-components";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const FeaturedWrapper = styled.section`

    display: flex;
    padding: 1rem 1rem;
    flex-direction: column;
    align-items: center;

    h2 {
        font-size: 3rem;
        font-weight: bold;
        text-align: center;
        margin: 0;
        margin-bottom: 2rem;
    };

`;

function FeaturedProjects() {
    return (
        <FeaturedWrapper>
            <h2>Featured Projects</h2>
            {projects.map((item) => ( //map through every item in my projects objekt

            <ProjectCard  //creating props from my projects.js
                key={item.id}
                img={item.img}
                title={item.title}
                desc={item.desc}
                netlifyUrl={item.netlifyUrl}
                githubUrl={item.githubUrl}
            />
        ))}
        </FeaturedWrapper>
    )
}

export default FeaturedProjects