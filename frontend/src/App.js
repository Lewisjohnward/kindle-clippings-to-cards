import { useRef, useEffect, useState } from "react";
import axios from "axios";
import styled, { createGlobalStyle } from "styled-components";
import {
  AiOutlineUpload,
  AiFillGithub,
  AiFillLinkedin,
  AiFillQuestionCircle,
} from "react-icons/ai";

const GlobalStyle = createGlobalStyle`
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
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.6);
  font-size: 2em;
`;
const TitleContainer = styled.div`
  position: absolute;
  top: -4%;
  left: -4%;
  transform: rotate(-13deg);
  font-family: "Dancing Script", cursive;
  font-size: 3rem;
`;
const Title = styled.p`
  margin: 0;
  padding: 0;
`;

const CenterContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 38%;
`;

const UploadIcon = styled(AiOutlineUpload)`
  font-size: 6em;
  color: black;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const ExternalLinkContainer = styled.div`
  position: absolute;
  bottom: 1%;
  right: 1%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 10%;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  & > *:hover {
    transform: scale(1.05);
  }

  & > *:active {
    color: black;
  }
`;

const GithubIcon = styled(AiFillGithub)``;
const LinkedinIcon = styled(AiFillLinkedin)``;
const QuestionIcon = styled(AiFillQuestionCircle)`
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.6);
  &:hover {
    transform: scale(1.05);
  }

  &:active {
    color: black;
  }
`;

const Input = styled.input.attrs({
  type: "file",
})`
  display: none;
`;

const A = styled.a`
  display: none;
`;

const App = () => {
  const [clippings, setClippings] = useState(null);
  const [csv, setCsv] = useState(null);
  const inputFile = useRef(null);
  const downloadFile = useRef(null);

  useEffect(() => {
    if (clippings) fileUpload(clippings);
  }, [clippings]);

  const onButtonClick = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
  };

  const handleFile = (e) => {
    e.preventDefault();
    setClippings(e.target.files[0]);
  };

  const fileUpload = (clippings) => {
    const url = "http://localhost:5000/upload";
    const formData = new FormData();
    formData.append("sampleFile", clippings);
    const config = {
      responseType: "blob",
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios.post(url, formData, config).then((res) => {
      setCsv(URL.createObjectURL(res.data));
      downloadFile.current.click();
    });
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
            <Input ref={inputFile} onChange={(e) => handleFile(e)} />
            <A href={csv ? csv : "#"} download="sheet.csv" ref={downloadFile} />
          </CenterContainer>
          <ExternalLinkContainer>
            <GithubIcon />
            <LinkedinIcon />
          </ExternalLinkContainer>
          <QuestionIcon />
        </MainContainer>
      </Frame>
    </>
  );
};

export default App;
