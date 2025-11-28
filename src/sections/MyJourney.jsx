import Button from "../components/Button";
import styled from "styled-components";
/* import { CardWrapper, ImageWrapper } from "../assets/styles/CardStyles"; */
import JourneyCard from "../components/JourneyCard";
import { journeyItems } from "../data/articles";

// MyJourney section displays a horizontally scrollable list of journey/article cards
function MyJourney() {
    return (
        <MyJourneyWrapper>
            <h2>My Journey</h2>
            {/* CardWrapper is horizontally scrollable on mobile, row layout on desktop */}
            <CardWrapper>
            {/* Map over journeyItems array and render a JourneyCard for each item */}
            {journeyItems.map((item) => (
                <JourneyCard
                    key={item.id}
                    // Pass image, title, description, and url as props
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
        font-size: 3.7rem;
        font-weight: bold;
        text-align: center;
        margin: 2rem 0;
    }

    h3 {
        font-size: 1.5rem;
    }
`;

const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    overflow-x: auto;
    width: 100%;
    max-width: 320px;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;


    @media (min-width: 544px) {
        max-width: 544px;
    }

    @media (min-width: 900px) {
        max-width: 1100px;
        justify-content: center;
        align-items: flex-start;
    }
`;