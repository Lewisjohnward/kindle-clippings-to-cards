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
  height: 800px;
`;

const MainContainer = styled.div`
  width: 800px;
  height: 500px;
  border-radius: 25px;
  background: white;
`;
const TitleContainer = styled.div`
  transform: translate(-20%, -80%) rotate(-25deg);
  font-family: "Dancing Script", cursive;
  font-size: 3rem;
`;
const Title = styled.div``;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Frame>
        <MainContainer>
          <TitleContainer>
            <Title>Kindle Clippings</Title>
            <Title>To Anki Cards</Title>
          </TitleContainer>
        </MainContainer>
      </Frame>
    </>
  );
};

export default App;
