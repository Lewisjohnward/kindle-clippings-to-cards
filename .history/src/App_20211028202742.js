import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html{
        min-height: 100%;
        
    }

    body{
        position: relative;
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

const MainContainer = styled.div`
border: 1px solid red;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 500px;
  height: 500px;
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
