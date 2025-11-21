import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #f4f4f4; 
    color: #0d0d0dff;
    font-family: "Inter", sans-serif;
  }

  button, input, textarea, select {
    font-family: inherit; 
  }

  h3 {
  
  };
`;

export default GlobalStyles;