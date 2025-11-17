import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
  font-family: sans-serif;
`;

function App() {
  return (
    <Container>
      <h1>Nu kör vi!</h1>
    </Container>
  )
}

export default App;