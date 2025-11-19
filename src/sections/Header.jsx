import styled from "styled-components";
import profileImg from '../assets/profilepic.svg';

const HeaderWrapper = styled.header`
    display: flex;
    padding: 35px 20px;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    align-self: stretch;
`;

const HeaderText = styled.section`
    
    h3 {
        font-size: 18px;
        font-weight: medium;
    }

    h2 {
        font-size: 60px;
        font-weight: bold;
        line-height: 60px; 
        margin: 0;
    }

    p {
        font-size: 18px;
        font-weight: regular;
        line-height: 26px; 
    }
`;

const ProfileImage = styled.img`
    width: 209.014px;
    height: 277.897px;
    flex-shrink: 0;
`;

function Header() {
    return (
        <HeaderWrapper>
            <HeaderText>
                <h3>I am Rebecca Sighed Paemurd</h3>
                <h2>Frontend Developer</h2>
                <p>I'm a developer-in-training (diving deep into React and Node.js!) who believes great code is only half the story. The other half? Great communication!
                    My background isn't just in tech; I spent years in the service industry, which means I really get teamwork, building relationships, and figuring out what people actually want. I'm passionate about building dynamic apps that don't just work, but feel amazing to use (I'm a total advocate for good UX).</p>
                {/* ikoner */}
            </HeaderText>
            <ProfileImage src={profileImg} alt="Rebecca Profile Picture" />
        </HeaderWrapper>
    )
}




export default Header;