import styled from "styled-components";
import { skillList } from "../data/skillList.js";

const SkillsWrapper = styled.section`

        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 1rem;

    h2 {
        letter-spacing: 1px;
        margin-bottom: 2rem;
        font-size: 3.7rem
    };

    h3 {
        font-size: 1.5rem;
    }

    ul {
        font-size: 1rem;
    }

    @media (min-width: 900px) {
        margin-bottom: 3rem; 
    }
`;

const SkillsGrid = styled.section`
    display: flex;
    flex-wrap: wrap;     
    justify-content: center; 
    width: 100%;
`;

const SkillColumn = styled.div`
    text-align: center;
    width: 100%; 

     h3 {
        letter-spacing: 0.8px;
        font-weight: 500;
        margin-top: 0;
    };

    ul {
        list-style-type: none;
        padding: 0;
    };

     li {
        line-height: 2rem;
        letter-spacing: 1px;
    };

    ul::after {
        content: "";
        display: ${(props) => (props.$hideLine ? "none" : "block")};
        width: 220px;         
        height: 2px;         
        background-color: #FD6F00;
        margin: 1rem auto 2rem auto;

    };

    @media (min-width: 900px) {
        width: 50%; 
        width: 25%; 
        position: relative;
        padding: 0 3rem;

        ul::after{
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 2px;
            height: 80%;
            margin: 0;
        }
    }
`;

function Skills(){
    return (
        <SkillsWrapper>
            <h2>Skills</h2>
            <SkillsGrid>

            {skillList.map((group) => (
                <SkillColumn key={group.category}
                $hideLine={group.category === "More"}> {/* if the category is more, $hideline is true and removes the line */}
                    <h3>{group.category}</h3>

                    <ul>
                        {group.items.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </SkillColumn>
                
            ))}

            </SkillsGrid>
        </SkillsWrapper>
    )
}

export default Skills

