import styled from "styled-components";

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

    h2 {
        margin: 6px;
    };


`;

function ProjectCard({ img, title, desc}) {
    return (
        <CardWrapper>
            <img src={img} alt="Project Picture" />
            <h2>{title}</h2>
            {/* <p>{desc}</p> */}
        </CardWrapper>
    )
};

export default ProjectCard