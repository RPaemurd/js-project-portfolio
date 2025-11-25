import Button from "../components/Button";
import styled from "styled-components";

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

const MyJourneyWrapper = styled.section`

    h2 {
        text-align: center;
        margin-bottom: 2rem;
    };
`;