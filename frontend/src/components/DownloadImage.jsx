import React, { memo } from "react";
import { saveAs } from "file-saver";
import GetAppIcon from "@material-ui/icons/GetApp";
import { IconButton } from "@material-ui/core";
import styled from "styled-components";

export const DownloadImage = memo((props) => {
  const { imageUrl } = props;
  const onClickDownload = () => {
    saveAs(imageUrl, "mosaic_image");
  };

  const ButtonStyle = {
    color: "white",
    fontSize: "2vw",
    fontWeight: "bold",
    borderRadius: "30px",
    height: "4vw",
    width: "13vw",
  };

  return (
    <>
      <div>
        <SCustomIconButton style={ButtonStyle} onClick={onClickDownload}>
          <span>download</span>
          <GetAppIcon style={{ fontSize: "2vw" }} />
        </SCustomIconButton>
      </div>
    </>
  );
});

const SCustomIconButton = styled(IconButton)`
  background: linear-gradient(45deg, #66b8cc, #65a7cc);
  &:hover {
    transform: translateY(-0.1rem);
    background: linear-gradient(45deg, #59a1b3, #cc6685);
    boxshadow: "0 3px 5px 2px rgba(255, 105, 135, 0.3)";
  }
  &:active {
    transform: translateY(-0.1rem);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }
`;
