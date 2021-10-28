import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html{
        min-height: 100%;
    }

    body{
        height: 100%;
        margin: 0;
        padding: 0;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background: black;
    }
`;

const MainContainer = styled.div`
  width: 500px;
  height: 500px;
  margin: auto;

  border-radius: 25px;
  background: white;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <MainContainer />
    </>
  );
};

export default App;
