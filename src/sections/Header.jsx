import styled, { keyframes } from "styled-components";
import profileImg from '../assets/images/img (2).svg';
import SocialLinks from "../components/SocialLinks";

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px); /* Startar 50px till vänster */
  }
  to {
    opacity: 1;
    transform: translateX(0); /* Slutar på sin vanliga plats */
  }
`;

const slideInTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px); /* Startar 50px ovanför */
  }
  to {
    opacity: 1;
    transform: translateY(0); /* Landar på rätt plats */
  }
`;

const HeaderWrapper = styled.header`
    display: flex;
    padding: 2rem 1rem;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    align-self: stretch;

    @media (min-width: 900px) {
        display: flex;
        flex-direction: row;
        padding: 2rem 0;

        h3 {
            font-size: 5rem;
        }
    }
`;

const HeaderText = styled.section`
    animation: ${slideInLeft} 1.2s ease-out forwards;
    h3 {
        font-size: 1.5rem;
        font-weight: 500;
    }

    h2 {
        font-size: 3.7rem;
        line-height: 4rem; 4
    }

    p {
        font-size: 1rem;
        font-weight: regular;
        line-height: 2rem; 
    }
    
     @media (min-width: 700px) {
        margin-left: 2rem;
    }
`;

const ProfileImage = styled.img`
    width: 219.014px;
    height: 277.897px;
    flex-shrink: 0;
    animation: ${slideInTop} 1.2s ease-out 0.3s forwards;
    opacity: 0; /* Gör den osynlig tills animationen startar */
`;

const SocialLinksWrapper = styled.div`
    margin: 3rem 0;
    display: flex;
`;

function Header() {
    return (
        <HeaderWrapper>
            <HeaderText>
                <h3>I am Rebecca Sighed Paemurd</h3>
                <h2>Frontend Developer</h2>
                <p>I'm a developer-in-training (diving deep into React and Node.js!) who believes great code is only half the story. The other half? Great communication!
                    My background isn't just in tech; I spent years in the service industry, which means I really get teamwork, building relationships, and figuring out what people actually want. I'm passionate about building dynamic apps that don't just work, but feel amazing to use (I'm a total advocate for good UX).</p>
             <SocialLinksWrapper>
                <SocialLinks />
            </SocialLinksWrapper>
            </HeaderText>
            <ProfileImage src={profileImg} alt="Rebecca Profile Picture" />
        </HeaderWrapper>
    )
}

export default Header;
