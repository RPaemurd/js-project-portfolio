import styled from "styled-components";
import { CardWrapper, ImageWrapper } from "../assets/styles/CardStyles";
import Button from "./Button";

function ProjectCard({ img, title, desc, netlifyUrl, githubUrl}) { //props
    return (
        <CardWrapper>
            <ImageWrapper>
                <img src={img} alt="Project Picture" />
            </ImageWrapper>

            <h3>{title}</h3>
            <p>{desc}</p>

            <ButtonWrapper> 
                <Button onClick={() => window.open(netlifyUrl, "_blank")} text="Live Demo" /> {/* manually assigning the props primary and text */}
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