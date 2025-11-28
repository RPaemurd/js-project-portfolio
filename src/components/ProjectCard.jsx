import styled from "styled-components";
import { CardWrapper, ImageWrapper } from "../assets/styles/CardStyles";
import Button from "./Button";

// ProjectCard displays a single project with image, title, description, and two action buttons
// Receives all data as props for reusability
function ProjectCard({ img, title, desc, netlifyUrl, githubUrl}) {
    return (
        <CardWrapper>
            <ImageWrapper>
                {/* Project image passed as prop */}
                <img src={img} alt="Project Picture" />
            </ImageWrapper>

            <h3>{title}</h3>
            <p>{desc}</p>

            <ButtonWrapper> 
                {/* Button opens the live demo in a new tab */}
                <Button onClick={() => window.open(netlifyUrl, "_blank")} text="Live Demo" />
                {/* Button opens the GitHub repo in a new tab, styled as primary */}
                <Button onClick={() => window.open(githubUrl, "_blank")} primary text="View Code" />
            </ButtonWrapper>
        </CardWrapper>
    )
};

export default ProjectCard



const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
      
    @media (min-width: 900px) {
        flex-direction: row;
        gap: 1rem;
    }
`;