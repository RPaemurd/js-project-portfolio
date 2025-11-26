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
    margin-top: 2rem;
    
    p {
        font-size: 1rem;
        font-weight: regular;
        line-height: 2rem; 
    };
`;