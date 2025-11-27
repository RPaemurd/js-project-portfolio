import styled from "styled-components";

export const CardWrapper = styled.article`
    display: flex;
    flex-direction: column;
    width: 306px;
    min-height: 380px;
    margin-bottom: 1rem;

    h3 {
        margin: 0.4rem 0;
    };

    p {
        margin: 1rem 0;
    };
`;

export const ImageWrapper = styled.div`

    position: relative;
    height: 200px;
    width: 100%;

    &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #f581292b;
    mix-blend-mode: multiply;
};

    img {
    width: 100%;
    height: 100%;
  /*   object-fit: cover;  */
    display: block;    
  };
`;