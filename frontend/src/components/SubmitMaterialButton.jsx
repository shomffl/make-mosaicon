import React, { useState } from "react";
import axios from "axios";
import { SelectButton } from "./SelectButton";
import { BackHomeButton } from "./BackHomeButton";
import { Button, IconButton } from "@material-ui/core";
import ReactLoading from "react-loading";
import PublishIcon from "@material-ui/icons/Publish";
import styled from "styled-components";
import backgroundImage from "../background3.png";
import imageCompression from "browser-image-compression";

//素材画像送信用の画面
export const SubmitMaterialButton = () => {
  const [openSelect, setOpenSelect] = useState(false);
  const [openLoadingImage, setOpenLoadingImage] = useState(false);
  const changeOpenSelect = () => setOpenSelect(!openSelect);

  const ButtonStyle = {
    color: "white",
    fontSize: "2vw",
    fontWeight: "bold",
    borderRadius: "30px",
    height: "4vw",
    width: "12vw",
  };

  const compressOption = {
    maxSizeMB: 0.01,
    maxWidthOrHeight: 50,
  };

  const submitImage = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const postForm = new FormData();
    setOpenLoadingImage(true);
    setOpenSelect(false);

    const file = form.getAll("file");
    if (file[0].name === "") {
      alert(
        "画像が選択されていません!!! リロードしてから画像を再送信してください。"
      );
    }
    for (let i = 0; i < file.length; i++) {
      await imageCompression(file[i], compressOption).then((result) => {
        postForm.append("file", result, file[i].name);
      });
    }

    const Upload = () => {
      axios
        .post("/download", postForm, {
          header: { "content-type": "multipart/form-data" },
        })
        .then((response) => {
          console.log(response.data.message);
          setOpenSelect(true);
          setOpenLoadingImage(!openLoadingImage);
        })
        .catch((error) => {
          alert("エラーが出ました！ 画像を再送信してください。");
        });
    };
    Upload();
  };

  return (
    <SBackground>
      <div>
        <Text>
          <span>素材にしたい画像を選択してください</span>
        </Text>

        <LoadingPosition>
          {openSelect ? null : (
            <>
              {openLoadingImage ? (
                <ReactLoading type="spin" width="35vmax" color="#f5f29d" />
              ) : null}
            </>
          )}
        </LoadingPosition>

        <Form onSubmit={submitImage} onChange={(e) => alert("画像が選択されました!!")} encType="multipart/form-data">
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
            <PublishIcon style={{ fontSize: "2vw" }} />
          </SCustomIconButton>
        </Form>
      </div>

      <SelectButtonPosition>
        <SelectButton
          openSelect={openSelect}
          changeOpenSelect={changeOpenSelect}
        />
      </SelectButtonPosition>

      <SHomeButtonPosition>
        <BackHomeButton />
      </SHomeButtonPosition>
    </SBackground>
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
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border: solid 10px;
  border-color: #505867;
  margin: 0px;
  padding: 0px;
`;

const Text = styled.div`
  background: #dfefff;
  box-shadow: 0px 0px 0px 5px #dfefff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5vmax;
  font-weight: bold;
  width: 50vmax;
  border: dashed 2px black;
  padding: 0.2vmax 0.5vmax;
  position: relative;
  bottom: 5vmax;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 4vw;
`;

const LoadingPosition = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -20vmax;
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
