import styled from "styled-components";
import Header from "./sections/Header";
import { GlobalStyles } from "./GlobalStyles";
import Footer from "./sections/Footer";
import FeaturedProjects from "./sections/FeaturedProjects";
import Skills from "./sections/Skills";
import Tech from "./sections/Tech";

const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 1rem;
  padding-bottom: 2rem;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <OuterWrapper>
        <Header />
          <Skills />
          <FeaturedProjects />
          <Tech />
      </OuterWrapper>
      <Footer />
    </>
  )
}

export default App;