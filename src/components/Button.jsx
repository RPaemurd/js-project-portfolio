
import styled from "styled-components"

const StyledButton = styled.button`
    
    width: 300px;
    height: 40px;
    font-weight: 600;
    border-radius: 10px;
    margin-top: 0.4rem;
    letter-spacing: 1px;
    font-size: 15px;

    background-color: ${(props) => props.primary ? "#FD6F00" : "#FFFFFF" };
    color: ${(props) => props.primary ? "#FFF": "#FD6F00" };
    border: 2px solid ${(props) => props.primary ? "#FFF" : "#FD6F00" };
`;

function Button({text, primary}) {
    return (
        <StyledButton primary={primary}>{text}</StyledButton>
    )
};

export default Button