import styled from "styled-components";

const TechText = styled.section`
    text-align: center;

    h2 {
        font-size: 42px;
        font-weight: bold;
        margin-top: 0;
    };
    
    p {
        font-size: 16px;
        font-weight: regular;
        line-height: 26px; 
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