import styled from "styled-components";

import linkedinIcon from '../assets/icons/linkedin.svg'; 
import githubIcon from '../assets/icons/github.svg';
import instagramIcon from '../assets/icons/instagram.svg';


const LinksWrapper = styled.div`
    
        display: flex;
        justify-content: space-around;
        gap: 15px;
    
`;

function SocialLinks() {
    return (
        <LinksWrapper>
            <a href="https://www.linkedin.com/in/rebecca-sighed-paemurd-68470b7b/">
                <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="https://github.com/RPaemurd">
                <img src={githubIcon} alt="GitHub" />
            </a>
            <a href="https://www.instagram.com/">
                <img src={instagramIcon} alt="Instagram" />
            </a>
        </LinksWrapper>
    );
}

export default SocialLinks;