import styled from "styled-components";
import profileImg from '../assets/images/img (2).svg';
import SocialLinks from "../components/SocialLinks";

const FooterWrapper = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0.5rem 1rem;
    
    align-items: center;
    gap: 0.5rem;
    align-self: stretch; 

    h2 {
        font-size: 3rem;
    }

    @media (min-width: 900px) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 6rem;
    }
`;

const FooterText = styled.article`

    align-self: flex-start;
    text-align: left;
    margin-left: 1rem;

    p {
        margin: 0.5rem 0;
        font-size: 1rem;
    }

    a {
        margin-top: 1rem;
    }

    span {
        color: #f8730d;
    }

    @media (min-width: 700px) {
        margin-left: 2rem;
    }

    @media (min-width: 900px) {
        padding-top: 4rem;
        
    }
`;

const ProfileImage = styled.img`
    width: 209.014px;
    height: 277.897px;
`;

const SocialLinksWrapper = styled.div`
    margin: 2rem 0;
    display: flex;
`;

function Footer() {
    return (
        <FooterWrapper>
            <ProfileImage src={profileImg} alt="Profile picture rebecca" />
            <FooterText>
                <h2>Let's <span>Connect</span> here</h2>
                <p>Rebecca Sighed Paemurd</p>
                <p>+46(0)709 36 88 36</p>
                <p>rebecca.paemurd@gmail.com</p>
                <SocialLinksWrapper>
                    <SocialLinks />
                </SocialLinksWrapper>
            </FooterText>
        </FooterWrapper>
    )

};

export default Footer;
