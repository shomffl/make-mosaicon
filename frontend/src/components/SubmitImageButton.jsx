import React, { useState, useContext } from "react";
import axios from "axios";
import { RemaikButton } from "./RemakeButton";
import { OpenCreateContext } from "../providers/OpenCreateProvider";
import { Button, IconButton } from "@material-ui/core";
import PublishIcon from "@material-ui/icons/Publish";
import styled from "styled-components";
import { DownloadImage } from "./DownloadImage";
import { OpenDownloadContext } from "../providers/OpenDownloadProvider";
import imageCompression from "browser-image-compression";

export const SubmitImageButton = (props) => {
  const { changeImage } = props;
  const { openCreate, setOpenCreate } = useContext(OpenCreateContext);
  const { openDownload, setOpenDownload } = useContext(OpenDownloadContext);
  const [imageUrl, setImageUrl] = useState("");

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
    maxWidthOrHeight: 100,
  };

  const submitImage = async (e) => {
    setOpenCreate(!openCreate);

    e.preventDefault();
    const form = new FormData(e.target);
    const postForm = new FormData();
    const file = form.get("file");
    const compressFile = await imageCompression(file, compressOption);
    postForm.append("file", compressFile, file.name);


    const Upload = () => {
      axios
        .post("/upload", postForm, {
          header: { "content-type": "multipart/form-data" },
        })
        .then((response) => {
          setOpenDownload(!openDownload);
          changeImage(
            `${process.env.PUBLIC_URL}/static/images/download_images/${response.data.image}`
          );
          setImageUrl(response.data.image);
        })
        .catch((error) => {
          alert("エラーが出ました！ 画像を再送信してください。");
        });
    };
    Upload();
  };

  return (
    <>
      {openCreate ? (
        <div>
          <Form onSubmit={submitImage}>
            <label>
              <input
                style={{ display: "none" }}
                type="file"
                name="file"
                accept="image/*"
              />
              <SStyledButton style={ButtonStyle} component="span">
                <span>SELECT</span>
              </SStyledButton>
            </label>

            <label>
              <SCustomIconButton style={ButtonStyle} type="submit">
                <span>upload</span>
                <PublishIcon style={{ fontSize: "2vw" }} />
              </SCustomIconButton>
            </label>
          </Form>
        </div>
      ) : (
        <>
          {openCreate === openDownload && (
            <Div>
              <DownloadImage imageUrl={imageUrl} />
              <RemaikButton changeImage={changeImage} />
            </Div>
          )}
        </>
      )}
    </>
  );
};

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 4vw;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 4vw;
`;

const SStyledButton = styled(Button)`
  background: linear-gradient(45deg, #66b8cc, #65a7cc);

  &:hover {
    transform: translateY(-0.1rem);
    background: linear-gradient(45deg, #59a1b3, #4d8a99);
    boxshadow: "0 3px 5px 2px rgba(255, 105, 135, 0.3)";
  }
  &:active {
    transform: translateY(-0.1rem);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }
`;

const SCustomIconButton = styled(IconButton)`
  background: linear-gradient(45deg, #66b8cc, #65a7cc);
  &:hover {
    transform: translateY(-0.1rem);
    background: linear-gradient(45deg, #59a1b3, #4d8a99);
    boxshadow: "0 3px 5px 2px rgba(255, 105, 135, 0.3)";
  }
  &:active {
    transform: translateY(-0.1rem);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }
`;
