import styled from "styled-components";

const TechText = styled.section`
    text-align: center;
    margin: 1rem 0;

    h2 {
        font-size: 3.7rem;
    }
    
    p {
        font-size: 1.5rem;
        font-weight: regular;
        line-height: 2rem; 
        margin: 0 auto;
        max-width: 90vw;
    }

    @media (min-width: 900px) {
        p {
            max-width: 500px;
        }
    }
`;

function Tech() {
    return(
        <TechText>
            <h2>Tech</h2>
            <p>HTML, CSS, JavaScript, React, React Hooks, Node.js,  Mongo DB, 
                Web Accessibility, APIs, mob-programming, pair-programming, Git. </p>
        </TechText>
    )
}

export default Tech
