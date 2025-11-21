import styled from "styled-components";
import profileImg from '../assets/images/img (2).svg';
import SocialLinks from "../components/SocialLinks";

const FooterWrapper = styled.section`
    display: flex;
    flex-direction: column;
    padding: 5px 15px;
    
    align-items: center;
    gap: 4px;
    align-self: stretch; 
`;

const FooterText = styled.article`

    align-self: flex-start;
    text-align: left;
    margin-bottom: 2rem;

    h2 {
        font-weight: bold;
        font-size: 35px;
    }

    p {
        margin: 5px 0;
    }

    a {
        margin-top: 1rem;
    }
`;

const ProfileImage = styled.img`
    width: 209.014px;
    height: 277.897px;
`;

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