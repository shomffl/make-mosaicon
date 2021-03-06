import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import { OpenDownloadContext } from "../providers/OpenDownloadProvider";
import styled from "styled-components";
import { OpenCreateContext } from "../providers/OpenCreateProvider";

//ホーム画面に戻るためのボタン
export const BackHomeButton = () => {
  const { setOpenDownload } = useContext(OpenDownloadContext);
  const { setOpenCreate } = useContext(OpenCreateContext);

  const history = useHistory();
  const onClickBackHome = () => {
    history.push("/home");
    setOpenDownload(true);
    setOpenCreate(true);
  };

  return (
    <>
      <IconButton onClick={onClickBackHome}>
        <CustomIcon style={{ fontSize: "6vw" }} />
      </IconButton>
    </>
  );
};

const CustomIcon = styled(HomeIcon)`
  background: linear-gradient(45deg, #ffffff, #accfcc);
  color: black;
  border-radius: 2vw;
  padding: 0.4vw;
  &:hover {
    transform: translateY(-1px);
    background: linear-gradient(45deg, #accfcc, #7f9997);
    boxshadow: "0 3px 5px 2px rgba(255, 105, 135, 0.3)";
  }
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }
`;
