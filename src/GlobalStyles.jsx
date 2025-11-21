import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    :root {
      --primary-color: #e66300ff";
      --secondary-color: #FFF;
      --bg-color: #f4f4f4;
      --text-color: #333333;
      --font-main: "Inter", sans-serif;
    };

  *, *::before, *::after {
    box-sizing: border-box;
  }


  body {
    margin: 0;
    padding: 0;
  }

  button, input, textarea, select {
    font-family: inherit; 
  }

  h3 {
  
  };
`;

export default GlobalStyles;