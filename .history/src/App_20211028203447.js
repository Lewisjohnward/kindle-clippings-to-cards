import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    body{
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
  position: relative;
  height: 100%;
`;

const MainContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  bottom: 0;
  right: 0;
  width: 50%;
  height: 50%;
  border: solid black;

  border-radius: 25px;
  background: white;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Frame>
        <MainContainer />
      </Frame>
    </>
  );
};

export default App;
