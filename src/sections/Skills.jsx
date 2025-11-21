import styled from "styled-components";
import { skillList } from "../data/skillList.js";

const SkillsWrapper = styled.section`

        display: flex;
        flex-direction: column;
        align-items: center;

    h2 {
        font-size: 42px;
        letter-spacing: 1px;
    };
`;

const SkillsGrid = styled.div`
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
    };

    ul {
        list-style-type: none;
        padding: 0;
    };

    ul::before {
    content: "";
    display: block;
    width: 220px;         
    height: 2px;         
    background-color: #FD6F00;
    margin: 10px auto 25px auto; /* Centrerar linjen (auto) */
  };

    li {
        line-height: 28px;
        letter-spacing: 1px;
    };
`;




function Skills(){
    return (
        <SkillsWrapper>
            <h2>Skills</h2>
            <SkillsGrid>

            {skillList.map((group) => (
                <SkillColumn key={group.category}>
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