import Button from "../components/Button";
import styled from "styled-components";

const MyJourneyWrapper = styled.section`

    h2 {
        font-size: 2.625rem;
        font-weight: bold;
        text-align: center;
        margin: 0;
        margin-bottom: 1.875rem;
    };
`;

function MyJourney() {
    return (
        <MyJourneyWrapper>
            <h2>My Journey</h2>
            {/* {projects.map((item) => ( //map through every item in my projects objekt

            <ProjectCard  //creating props from my projects.js
                key={item.id}
                img={item.img}
                title={item.title}
                desc={item.desc}
            /> 
        ))}*/}
        </MyJourneyWrapper>
    )
};

export default MyJourney