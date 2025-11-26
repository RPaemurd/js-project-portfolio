import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    :root {
      --primary-clr: #e66300ff;
      --secnd-clr: #FFF;
      --bg-clr: #f4f4f4;
      --txt-clr: #333333;
      --font-main: "Inter", sans-serif;
      --font-second: "Helvetica", sans-serif;

      --fs-h2: 3rem;
      --fw-h2: bold; 

    };

  *, *::before, *::after {
    box-sizing: border-box;
  }


  body {
    margin: 0;
    padding: 0;
    font-family: var(--font-main);
  }

  button, input, textarea, select {
    font-family: inherit; 
  }

  h2 {
    font-size: 2.7rem;
    font-weight: bold;
    margin: 0;
  }

  
`;

