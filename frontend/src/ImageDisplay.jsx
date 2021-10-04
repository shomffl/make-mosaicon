import React, { useState, useContext } from "react";
import { BackHomeButton } from "./components/BackHomeButton";
import { SubmitImageButton } from "./components/SubmitImageButton";
import styled from "styled-components";
import backgroundImage from "./background2.png";
import logo from "./display.png";
import ReactLoading from "react-loading";
import { OpenCreateContext } from "./providers/OpenCreateProvider";
import { OpenDownloadContext } from "./providers/OpenDownloadProvider";

export const ImageDisplay = () => {
  const { openCreate } = useContext(OpenCreateContext);
  const { openDownload } = useContext(OpenDownloadContext);
  const [image, setImage] = useState(logo);
  const changeImage = (path) => setImage(path);

  return (
    <div style={{ textAlign: "center" }}>
      <SBackground>
        <SImage src={image} alt="img-screen" />

        {openCreate ? null : (
          <>
            {openDownload ? (
              <SReactLoading type="spokes" width="350px" color="#5CADB8" />
            ) : null}
          </>
        )}

        <SUploadButtonPosition>
          <SubmitImageButton changeImage={changeImage} />
        </SUploadButtonPosition>
        <SHomeButtonPosition>
          <BackHomeButton />
        </SHomeButtonPosition>
      </SBackground>
    </div>
  );
};

const SBackground = styled.header`
  background-image: linear-gradient(
      to right bottom,
      rgba(150, 150, 150, 0.4),
      rgba(100, 100, 100, 0.7)
    ),
    url(${backgroundImage});
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  box-sizing: border-box;
  border: solid 10px;
  border-color: #505867;
  margin: 0px;
  padding: 0px;
  position: relative;
`;

const SImage = styled.img`
  width: 400px;
  height: 400px;
  position: absolute;
  top: 7%;
`;

const SReactLoading = styled(ReactLoading)`
  position: absolute;
  top: 11%;
`;

const SUploadButtonPosition = styled.div`
  position: absolute;
  top: 75%;
`;

const SHomeButtonPosition = styled.div`
  position: absolute;
  top: 1.5%;
  left: 1.5%;
`;
