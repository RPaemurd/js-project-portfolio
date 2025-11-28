import styled from "styled-components";
import { CardWrapper, ImageWrapper } from "../assets/styles/CardStyles";
import Button from "./Button";

function JourneyCard({ img, title, desc, url }) {
    return (
        <CardWrapper>
            <ImageWrapper>
                <img src={img} alt={title} />
            </ImageWrapper>

            <h3>{title}</h3>
            <p>{desc}</p>

            <ButtonWrapper>
                <Button onClick={() => window.open(url, "_blank")} text="Read More" />
            </ButtonWrapper>
        </CardWrapper>
    )
}

export default JourneyCard;



const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.5rem;
      
    @media (min-width: 900px) {
        flex-direction: row;
        gap: 1rem;
    }
`;
