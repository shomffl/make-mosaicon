import React, { useState } from "react";
import axios from "axios";
import { SelectButton } from "./SelectButton";
import { BackHomeButton } from "./BackHomeButton";
import { Button, IconButton } from "@material-ui/core";
import ReactLoading from "react-loading";
import PublishIcon from "@material-ui/icons/Publish";
import styled from "styled-components";
import backgroundImage from "../background3.png";

export const SubmitMaterialButton = () => {
  const [openSelect, setOpenSelect] = useState(false);
  const [openLoadingImage, setOpenLoadingImage] = useState(false);
  const changeOpenSelect = () => setOpenSelect(!openSelect);

  const ButtonStyle = {
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
    borderRadius: "30px",
    width: "120px",
    height: "48px",
    radius: "30px",
  };

  const submitImage = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setOpenLoadingImage(!openLoadingImage);

    const Upload = () => {
      axios
        .post("/download", formData, {
          header: { "content-type": "multipart/form-data" },
        })
        .then(() => {
          changeOpenSelect();
          setOpenLoadingImage(!openLoadingImage);
        });
    };
    Upload();
  };

  return (
    <div style={{ textAlign: "center" }}>
      <SBackground>
        <div>
          <H2>素材にしたい画像を選択してください</H2>
          <Form onSubmit={submitImage} encType="multipart/form-data">
            <label>
              <input
                style={{ display: "none" }}
                type="file"
                name="file"
                accept="image/*"
                multiple="multipel"
              />
              <SStyledButton style={ButtonStyle} component="span">
                SELECT
              </SStyledButton>
            </label>

            <SCustomIconButton style={ButtonStyle} type="submit">
              <span>upload</span>
              <PublishIcon />
            </SCustomIconButton>
            {openSelect ? null : (
              <>
                {openLoadingImage ? (
                  <SReactLoading type="spokes" width="350px" color="#f5f29d" />
                ) : null}
              </>
            )}
          </Form>

          <SelectButtonPosition>
            <SelectButton
              openSelect={openSelect}
              changeOpenSelect={changeOpenSelect}
            />
          </SelectButtonPosition>
        </div>
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
      rgba(200, 200, 200, 0.3),
      rgba(150, 150, 150, 0.6)
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

const SReactLoading = styled(ReactLoading)`
  position: absolute;
  bottom: 350%;
`;

const H2 = styled.h2`
  background: #dfefff;
  box-shadow: 0px 0px 0px 5px #dfefff;
  border: dashed 2px black;
  padding: 0.2em 0.5em;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 0 50px;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SStyledButton = styled(Button)`
  background: linear-gradient(45deg, #cc7a93, #cc6685);

  &:hover {
    transform: translateY(-0.1rem);
    background: linear-gradient(45deg, #cc295a, #cc003d);
    boxshadow: "0 3px 5px 2px rgba(255, 105, 135, 0.3)";
  }
  &:active {
    transform: translateY(-0.1rem);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }
`;

const SCustomIconButton = styled(IconButton)`
  background: linear-gradient(45deg, #cc7a93, #cc6685);

  &:hover {
    transform: translateY(-0.1rem);
    background: linear-gradient(45deg, #cc295a, #cc003d);
    boxshadow: "0 3px 5px 2px rgba(255, 105, 135, 0.3)";
  }
  &:active {
    transform: translateY(-0.1rem);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }
`;

const SHomeButtonPosition = styled.div`
  position: absolute;
  top: 1.5%;
  left: 1.5%;
`;

const SelectButtonPosition = styled.div`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
