/* import styled from "styled-components";
import { CardWrapper, ImageWrapper } from "../assets/styles/CardStyles";
import Button from "./Button";

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

// JourneyCard displays a single journey/article card with image, title, description, and a button
// Receives all data as props for reusability
function JourneyCard({ img, title, desc, url }) {
    return (
        <CardWrapper>
            <ImageWrapper>
                {/* Article image passed as prop }
                <img src={img} alt={title} />
            </ImageWrapper>

            <h3>{title}</h3>
            <p>{desc}</p>

            <ButtonWrapper>
                {/* Button opens the article link in a new tab }
                <Button onClick={() => window.open(url, "_blank")} text="Read More" />
            </ButtonWrapper>
        </CardWrapper>
    )
}
 */