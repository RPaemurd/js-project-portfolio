import styled from "styled-components";
import Button from "./Button";

const CardWrapper = styled.article`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 390px;
    margin-bottom: 1rem;

    img {
        height: 200px
    };

    h3 {
        margin: 0.4rem 0;
    };

    p {
        margin: 10px 0;
    };
`;

const ButtonWrapper = styled.section`

`;

function ProjectCard({ img, title, desc}) {
    return (
        <CardWrapper>
            <img src={img} alt="Project Picture" />
            <h3>{title}</h3>
            <p>{desc}</p>

            <ButtonWrapper>
                <Button primary text="Live Demo" />
                <Button text="View Code" />
            </ButtonWrapper>
        </CardWrapper>
    )
};

export default ProjectCard