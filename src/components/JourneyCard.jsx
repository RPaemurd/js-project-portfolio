import styled from "styled-components";
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

const CardWrapper = styled.article`
    display: flex;
    flex-direction: column;
    width: 306px;
    min-height: 380px;
    margin-bottom: 1rem;

    h3 {
        margin: 0.4rem 0;
    };

    p {
        margin: 1rem 0;
    };
`;

const ImageWrapper = styled.div`
    position: relative;
    height: 200px;
    width: 100%;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #f581292b;
        mix-blend-mode: multiply;
    }

    img {
        width: 100%;
        height: 100%;
        display: block;    
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
      
    @media (min-width: 900px) {
        flex-direction: row;
        gap: 1rem;
    }
`;
