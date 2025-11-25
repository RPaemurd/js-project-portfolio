import styled from "styled-components"

function Button({text, primary, onClick}) {
    return (
        <StyledButton onClick={onClick} $primary={primary}>{text}</StyledButton>
    )
};

export default Button

const StyledButton = styled.button`
    
    width: 300px;
    height: 40px;
    font-weight: 600;
    border-radius: 10px;
    margin-top: 0.4rem;
    letter-spacing: 1px;
    font-size: 1rem;

    /* if the button has props primary use */
    background-color: ${(props) => props.$primary ? "var(--secnd-clr)" : "var(--primary-clr)" };
    color: ${(props) => props.$primary ? "var(--primary-clr)" : "var(--secnd-clr)"};
    border: 2px solid ${(props) => props.$primary ? "var(--primary-clr)" : "var(--secnd-clr)" };

    @media (max-width: 360px) {
        width: 260px;
    }
`;