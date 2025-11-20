import styled from "styled-components";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const FeaturedWrapper = styled.section`
`;

function FeaturedProjects() {
    return (
        <FeaturedWrapper>
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