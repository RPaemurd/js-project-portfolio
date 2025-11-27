import Button from "../components/Button";
import styled from "styled-components";
/* import { CardWrapper, ImageWrapper } from "../assets/styles/CardStyles"; */
import JourneyCard from "../components/JourneyCard";
import { journeyItems } from "../data/articles";

function MyJourney() {
    return (
        <MyJourneyWrapper>
            <h2>My Journey</h2>
            <CardWrapper>
            {journeyItems.map((item) => (
                <JourneyCard
                    key={item.id}
                    img={item.img}
                    title={item.title}
                    desc={item.desc}
                    url={item.url}
                />
            ))}
            </CardWrapper>
        </MyJourneyWrapper>
    )
}

export default MyJourney;

const MyJourneyWrapper = styled.section`

    h2 {
        font-size: 3rem;
        font-weight: bold;
        text-align: center;
        margin: 0;
        margin-bottom: 2rem;
    }
`;

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;

    @media (min-width: 900px) {
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
    }
`;