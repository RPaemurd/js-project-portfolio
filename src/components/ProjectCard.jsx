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
  
  ${({ $inView, $delay }) => $inView && css`
    animation: ${slideInBottom} 0.5s ease-out ${$delay}s forwards;
  `}
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
      
    @media (min-width: 900px) {
        flex-direction: row;
        gap: 0.5rem;
    }
`;

function ProjectCard({ img, title, netlifyUrl, githubUrl, index = 0 }) {
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

            <h3>{title}</h3>

            <ButtonWrapper> 
                <Button onClick={() => window.open(netlifyUrl, "_blank")} text="Live Demo" />
                <Button onClick={() => window.open(githubUrl, "_blank")} primary text="View Code" />
            </ButtonWrapper>
        </StyledProjectCard>
    );
};

export default ProjectCard;