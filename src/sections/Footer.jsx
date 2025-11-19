import styled from "styled-components";
import profileImg from '../assets/profilepic.svg';


const FooterWrapper = styled.section`

`;

const FooterText = styled.article`
    h2 {
        font-weight: bold;
        font-size: 35px;
    }

    p {
        margin: 5px;
    }
`;


const ProfileImage = styled.img`
    width: 209.014px;
    height: 277.897px;
    flex-shrink: 0;
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
        </FooterWrapper>
    )

};

export default Footer;