import styled from "styled-components";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const FeaturedWrapper = styled.section`

    display: flex;
    padding: 30px 15px;
    flex-direction: column;
    align-items: center;

    h2 {
        font-size: 50px;
        font-weight: bold;
        text-align: center;
    };

`;

function FeaturedProjects() {
    return (
        <FeaturedWrapper>
            <h2>Featured Projects</h2>
            {projects.map((item) => (

            <ProjectCard 
                key={item.key}
                img={item.img}
                title={item.title}
                desc={item.desc}
            />
        ))}
        </FeaturedWrapper>
    )
}

export default FeaturedProjects