import styled from "styled-components";
import { skillList } from "../data/skillList.js";

const SkillsWrapper = styled.section`

        display: flex;
        flex-direction: column;
        align-items: center;

    h2 {
        font-size: 3rem;
        letter-spacing: 1px;
        margin: 0;
        margin-bottom: 2rem;
    };
`;

const SkillsGrid = styled.section`
    display: flex;
    flex-wrap: wrap;     
    justify-content: center; 
    width: 100%;
`;

const SkillColumn = styled.div`

    text-align: center;

     h3 {
        letter-spacing: 0.8px;
        font-weight: 500;
        margin-top: 0;
    };

    ul {
        list-style-type: none;
        padding: 0;
    };

    ul::after {
    content: "";
    display: block;
    display: ${(props) => props.$hideLine ? "none" : "block"};
    width: 220px;         
    height: 2px;         
    background-color: #FD6F00;
    margin: 1rem auto 2rem auto; /* Centrerar linjen (auto) */
  };

    li {
        line-height: 2rem;
        letter-spacing: 1px;
    };
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