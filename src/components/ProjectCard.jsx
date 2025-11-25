import styled from "styled-components";
import Button from "./Button";

const CardWrapper = styled.article`
    display: flex;
    flex-direction: column;
    width: 307px;
    min-height: 380px;
    margin-bottom: 1rem;
    cursor: pointer; 

    h3 {
        margin: 0.4rem 0;
    };

    p {
        margin: 1rem 0;
    };
`;

const ImageWrapper = styled.div`

    position: relative;
    height: 200px;
    width: 100%;

    &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #f581292b;
    mix-blend-mode: multiply;
};

    img {
    width: 100%;
    height: 100%;
  /*   object-fit: cover;  */
    display: block;    
  };
`;

/* const ButtonWrapper = styled.div`
`; */

function ProjectCard({ img, title, desc, netlifyUrl, githubUrl}) { //props
    return (
        <CardWrapper>
            <ImageWrapper>
                <img src={img} alt="Project Picture" />
            </ImageWrapper>

            <h3>{title}</h3>
            <p>{desc}</p>

            {/* <ButtonWrapper>  */}
                <Button onClick={() => window.open(netlifyUrl, "_blank")} text="Live Demo" /> {/* manually assigning the props primary and text */}
                <Button onClick={() => window.open(githubUrl, "_blank")} primary text="View Code" />
            {/* </ButtonWrapper> */}
        </CardWrapper>
    )
};

export default ProjectCard