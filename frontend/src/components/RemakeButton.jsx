import React, { memo, useEffect, useContext } from "react";
import logo from "../display.png";
import ReplayIcon from "@material-ui/icons/Replay";
import { IconButton } from "@material-ui/core";
import { OpenCreateContext } from "../providers/OpenCreateProvider";
import styled from "styled-components";
import { OpenDownloadContext } from "../providers/OpenDownloadProvider";
import axios from "axios";

export const RemaikButton = memo((props) => {
  const { changeImage } = props;
  const { openCreate, setOpenCreate } = useContext(OpenCreateContext);
  const { openDownload, setOpenDownload } = useContext(OpenDownloadContext);

  const ButtonStyle = {
    color: "white",
    fontSize: "2vw",
    fontWeight: "bold",
    borderRadius: "30px",
    height: "4vw",
    width: "13vw",
  };

  useEffect(() => {
    axios.get("/remake");
  }, []);

  const onClickRemake = () => {
    changeImage(logo);
    setOpenCreate(!openCreate);
    setOpenDownload(!openDownload);
  };

  return (
    <SStyledButton style={ButtonStyle} onClick={onClickRemake}>
      <span>remake</span>
      <ReplayIcon style={{ fontSize: "2vw" }} />
    </SStyledButton>
  );
});

const SStyledButton = styled(IconButton)`
  background: linear-gradient(45deg, #66b8cc, #65a7cc);
  &:hover {
    transform: translateY(-0.1rem);
    background: linear-gradient(45deg, #59a1b3, #ccad66);
    boxshadow: "0 3px 5px 2px rgba(255, 105, 135, 0.3)";
  }
  &:active {
    transform: translateY(-0.1rem);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }
`;
