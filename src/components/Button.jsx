
import styled from "styled-components"

const StyledButton = styled.button`
    
    width: 300px;
    height: 40px;
    font-weight: 600;
    border-radius: 10px;
    margin-top: 0.4rem;
    letter-spacing: 1px;
    font-size: 15px;

    /* if the button has props primary use */
    background-color: ${(props) => props.$primary ? "#FFFFFF" : "#FD6F00" };
    color: ${(props) => props.$primary ? "#FD6F00" : "#FFFFFF"};
    border: 2px solid ${(props) => props.$primary ? "#FD6F00" : "#FFFFFF" };
`;

function Button({text, primary, onClick}) {
    return (
        <StyledButton onClick={onClick} $primary={primary}>{text}</StyledButton>
    )
};

export default Button