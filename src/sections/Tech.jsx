import styled from "styled-components";

function Tech() {
    return(
        <TechText>
            <h2>Tech</h2>
            <p>HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Node.js,  Mongo DB, 
                Web Accessibility, APIs, mob-programming, pair-programming, GitHub. </p>
        </TechText>
    )
}

export default Tech

const TechText = styled.section`
    text-align: center;
    margin: 2rem 0;
    
    p {
        font-size: 1rem;
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