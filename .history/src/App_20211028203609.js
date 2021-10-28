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
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: green;
`;

const MainContainer = styled.div`
  top: 200px;
  left: 25%;
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
