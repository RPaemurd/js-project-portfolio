
import styled from "styled-components"

const StyledButton = styled.button`
    
    width: 300px;
    height: 40px;
    font-weight: 600;
    border-radius: 10px;
    margin-top: 0.4rem;
    letter-spacing: 1px;
    font-size: 0.938rem;

    /* if the button has props primary use */
    background-color: ${(props) => props.$primary ? "#FFFFFF" : "#e66300ff" };
    color: ${(props) => props.$primary ? "#e66300ff" : "#FFFFFF"};
    border: 2px solid ${(props) => props.$primary ? "#e66300ff" : "#FFFFFF" };
`;

function Button({text, primary, onClick}) {
    return (
        <StyledButton onClick={onClick} $primary={primary}>{text}</StyledButton>
    )
};

export default Button