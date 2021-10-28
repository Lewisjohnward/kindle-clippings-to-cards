import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    body{
        min-height: 100%;
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
  justify-content: center;
  align-items: center;
  height: 100%;
border: 1px solid red;
`;

const MainContainer = styled.div`
  width: 500px;
  height: 500px;
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
