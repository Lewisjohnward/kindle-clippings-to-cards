import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        height: 100%;
        margin: 0;
        padding: 0;
        background-image: linear-gradient(
            50deg,
            0% rgb(48, 186, 186),
            90% rgb(211, 63, 63)
        )
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
