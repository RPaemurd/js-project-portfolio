import styled from "styled-components";

const TechText = styled.section`
    text-align: center;

    h2 {
        font-size: 2.625rem;
        font-weight: bold;
        margin-top: 0;
    };
    
    p {
        font-size: 1rem;
        font-weight: regular;
        line-height: 1.625rem; 
    };
`;

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