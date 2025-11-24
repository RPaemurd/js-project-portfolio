import styled from "styled-components";
import profileImg from '../assets/images/img (2).svg';
import SocialLinks from "../components/SocialLinks";

const HeaderWrapper = styled.header`
    display: flex;
    padding: 2rem 1rem;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    align-self: stretch;
`;

const HeaderText = styled.section`
    
    h3 {
        font-size: 1rem;
        font-weight: medium;
    }

    h2 {
        font-size: 4rem;
        line-height: 4rem; 
    }

    p {
        font-size: 1rem;
        font-weight: regular;
        line-height: 2rem; 
    }
`;

const ProfileImage = styled.img`
    width: 219.014px;
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
            </HeaderText>
            <SocialLinks />
            <ProfileImage src={profileImg} alt="Rebecca Profile Picture" />
        </HeaderWrapper>
    )
}

export default Header;