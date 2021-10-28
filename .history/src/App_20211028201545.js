import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        background: linear-gradient(
            50deg
            0% rgb(48, 186, 186)
            90% rgb(211, 63, 63)
        )
    }
`;


const MainContainer = styled.div`
    width: 500px;
    margin: auto
    background: white;
`

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <MainContainer />
    </>
  );
};
