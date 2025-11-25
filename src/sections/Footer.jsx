import styled from "styled-components";
import profileImg from '../assets/images/img (2).svg';
import SocialLinks from "../components/SocialLinks";

function Footer() {
    return (
        <FooterWrapper>
            <ProfileImage src={profileImg} alt="Profile picture rebecca" />
            <FooterText>
                <h2>Let's talk</h2>
                <p>Rebecca Sighed Paemurd</p>
                <p>+46(0)709 36 88 36</p>
                <p>rebecca.paemurd@gmail.com</p>
            </FooterText>
            <SocialLinks />
        </FooterWrapper>
    )

};

export default Footer;

const FooterWrapper = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0.5rem 1rem;
    
    align-items: center;
    gap: 0.5rem;
    align-self: stretch; 
`;

const FooterText = styled.article`

    align-self: flex-start;
    text-align: left;
    margin-bottom: 2rem;

    p {
        margin: 0.5rem 0;
    }

    a {
        margin-top: 1rem;
    }
`;

const ProfileImage = styled.img`
    width: 209.014px;
    height: 277.897px;
`;