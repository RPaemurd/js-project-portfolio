import styled from "styled-components";
import Header from "./sections/Header";
import GlobalStyles from "./GlobalStyles";
import Footer from "./sections/Footer";
import FeaturedProjects from "./sections/FeaturedProjects";

const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding-bottom: 31.651px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <OuterWrapper>
        <Header />
          <FeaturedProjects />
      </OuterWrapper>
      <Footer />
    </>
  )
}

export default App;