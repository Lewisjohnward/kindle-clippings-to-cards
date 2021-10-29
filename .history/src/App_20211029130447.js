import { useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { AiOutlineUpload, AiFillGithub } from "react-icons/ai";

const GlobalStyle = createGlobalStyle`
body,
html {
  height: 100%;
}
    body{
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

const Frame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 800px;
`;

const MainContainer = styled.div`
  position: relative;
  width: 800px;
  height: 500px;
  border-radius: 25px;
  background: white;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
`;
const TitleContainer = styled.div`
  position: absolute;
  top: -4%;
  transform: rotate(-13deg);
  font-family: "Dancing Script", cursive;
  font-size: 3rem;
`;
const Title = styled.p`
  margin: 0;
  padding: 0;
`;

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
`;

const UploadIcon = styled(AiOutlineUpload)`
  font-size: 6em;
  color: black;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
`;

const ExternalLinkContainer = styled.div`

  border: 1px solid red;
`

const GithubIcon = styled(AiFillGithub)`
  font-size: 2em;
  color: black;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
`;

const Input = styled.input.attrs({
  type: "file",
})`
  display: none;
`;

const App = () => {
  const inputFile = useRef(null);

  const onButtonClick = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
  };

  return (
    <>
      <GlobalStyle />
      <Frame>
        <MainContainer>
          <TitleContainer>
            <Title>Kindle Clippings</Title>
            <Title>To Anki Cards</Title>
          </TitleContainer>
          <CenterContainer>
            <UploadIcon onClick={onButtonClick} />
            <Input ref={inputFile} />
          </CenterContainer>
          <ExternalLinkContainer>
            <GithubIcon />
          </ExternalLinkContainer>
        </MainContainer>
      </Frame>
    </>
  );
};

export default App;
