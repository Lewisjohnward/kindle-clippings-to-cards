import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        background: black;
    }
`;


const MainContainer = styled.div`
    width: 500px;
    height: 500px;
    margin: auto;

    border-radius: 25px;
    background: white;
`

const App = () => {
  return (
    <>
      <GlobalStyle />
      <MainContainer />
    </>
  );
};

export default App
