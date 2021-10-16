import React, { useState, useContext } from "react";
import { BackHomeButton } from "./BackHomeButton";
import { SubmitImageButton } from "./SubmitImageButton";
import styled from "styled-components";
import backgroundImage from "../background2.png";
import logo from "../display.png";
import ReactLoading from "react-loading";
import { OpenCreateContext } from "../providers/OpenCreateProvider";
import { OpenDownloadContext } from "../providers/OpenDownloadProvider";

export const ImageDisplay = () => {
  const { openCreate } = useContext(OpenCreateContext);
  const { openDownload } = useContext(OpenDownloadContext);
  const [image, setImage] = useState(logo);
  const changeImage = (path) => setImage(path);

  return (
    <div style={{ textAlign: "center" }}>
      <SBackground>
        <Div>
          <SImage src={image} alt="img-screen" />

          {openCreate ? null : (
            <>
              {openDownload ? (
                <SReactLoading type="spokes" width="35vmax" color="#5CADB8" />
              ) : null}
            </>
          )}
          <SUploadButtonPosition>
            <SubmitImageButton changeImage={changeImage} />
          </SUploadButtonPosition>
        </Div>

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
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border: solid 10px;
  border-color: #505867;
  margin: 0px;
  padding: 0px;
`;

const Div = styled.div`
  position: relative;
  top: 0.5vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SImage = styled.img`
  width: 35vmax;
  height: 35vmax;
  position: relative;
  bottom: 4vw;
`;

const SReactLoading = styled(ReactLoading)`
  position: absolute;
  top: -4vw;
`;

const SUploadButtonPosition = styled.div`
  position: absolute;
  top: 33vmax;
`;

const SHomeButtonPosition = styled.div`
  position: absolute;
  top: 1vw;
  left: 1vw;
`;
