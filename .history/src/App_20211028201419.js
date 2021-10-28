import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
    }
`;


const MainContainer = styled.div`
    width: 500px;
    margin: auto
`

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <MainContainer />
    </>
  );
};
