import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body,
html {
  height: 100%;
}
    body{
        height: 100%;
        margin: 0;
        padding: 0;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-image: linear-gradient(
            30deg,
            rgb(48, 186, 186),
            rgb(211, 63, 63)
        );
        
    }
`;

const Frame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height:   800px;
`;

const MainContainer = styled.div`
  width: 800px;
  height: 500px;
  border: solid black;

  border-radius: 25px;
  background: white;
`;
const Title = styled.div`
    transform: rotate(-45deg);
    text-anchor: middle;e
    font-family: 'Dancing Script', cursive;
    font-size: 2rem;
`

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Frame>
        <MainContainer>
            <Title>Kindle Clippings To Anki Cards</Title>
        </MainContainer>
      </Frame>
    </>
  );
};

export default App;
