import styled from "styled-components";
import Button from "./Button";

const CardWrapper = styled.article`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 350px;
/*     border: 2px solid #FD6F00;
 */    margin-bottom: 0.5rem;

    img {
        height: 200px
    };

    h3 {
        margin: 6px;
    };
`;

const ButtonWrapper = styled.section`

`;

function ProjectCard({ img, title, desc}) {
    return (
        <CardWrapper>
            <img src={img} alt="Project Picture" />
            <h3>{title}</h3>
            {/* <p>{desc}</p> */}

            <ButtonWrapper>
                <Button primary text="Live Demo" />
                <Button text="View Code" />
            </ButtonWrapper>
        </CardWrapper>
    )
};

export default ProjectCard