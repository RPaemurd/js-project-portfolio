import styled, { keyframes, css } from "styled-components"; // Importera keyframes
import { useInView } from "react-intersection-observer"; // Importera hooken
import { CardWrapper, ImageWrapper } from "../assets/styles/CardStyles";
import Button from "./Button";

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

const StyledProjectCard = styled(CardWrapper)`
    opacity: 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    width: 100%;
    height: auto; 

    /* Storlek på mobilen */
    div:first-child {
        width: 90%; 
        max-width: 300px; 
    }

    ${({ $inView, $delay }) => $inView && css`
        animation: ${slideInBottom} 0.5s ease-out ${$delay}s forwards;
    `}

    @media (min-width: 900px) {
        flex-direction: row;
        justify-content: center;
        gap: 3rem; 
        max-width: 1200px; 

        div:first-child {
            width: 60%;
            max-width: 700px;
        }

        &:nth-child(odd) {
            section { 
                margin-left: 6rem; 
            }
        }

        &:nth-child(even) {
            flex-direction: row-reverse;
            section { 
                margin-right: 4rem; 
            }
        }
        
       
    }
`;

const TextContent = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;

    @media (min-width: 800px) {
        align-items: flex-start; 
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
      
    @media (min-width: 900px) {
        flex-direction: row;
        gap: 0.5rem;
        padding: 1rem 0;
    }
`;

function ProjectCard({ img, title, desc, netlifyUrl, githubUrl, index = 0 }) {
    const { ref, inView } = useInView({
        triggerOnce: true, 
        threshold: 0.1,   
    });

    const delay = index * 0.1;

    return (
        <StyledProjectCard ref={ref} $inView={inView} $delay={delay}>
            <ImageWrapper>
                <img src={img} alt={`${title} cover`} />
            </ImageWrapper>
      <TextContent>
            <h3>{title}</h3>
            <p>{desc}</p>

            <ButtonWrapper> 
                <Button onClick={() => window.open(netlifyUrl, "_blank")} text="Live Demo" />
                <Button onClick={() => window.open(githubUrl, "_blank")} primary text="View Code" />
            </ButtonWrapper>
            </TextContent>
        </StyledProjectCard>
    );
};

export default ProjectCard;