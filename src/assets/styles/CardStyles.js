import styled from "styled-components";

export const CardWrapper = styled.article`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 350px
    margin-bottom: 1rem;

    h3 {
        margin: 0.4rem 0;
    };

    p {
        margin: 1rem 0;
    };

    @media (min-width: 900px) {
        max-width: 1200px; 
    }
`;

export const ImageWrapper = styled.div`

    position: relative;
    width: 100%;
    max-width: 100%;
    &::after {5
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    mix-blend-mode: multiply;
};

    img {
    width: 100%;
    height: auto;
    display: block;    
  };
`;