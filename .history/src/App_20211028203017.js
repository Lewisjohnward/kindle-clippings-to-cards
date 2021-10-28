import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html{
        min-height: 100%;
        
    }

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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
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
