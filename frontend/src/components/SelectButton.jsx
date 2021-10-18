import React from "react";
import { useHistory } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import styled, { keyframes } from "styled-components";


//素材画像の選択終了後にオリジナル画像選択画面へ遷移するボタン
export const SelectButton = (props) => {
  const { openSelect, changeOpenSelect } = props;
  const history = useHistory();
  const onClickFinish = () => {
    history.push("/simple");
    changeOpenSelect();
  };

  const ButtonStyle = {
    color: "white",
    fontSize: "2vw",
    fontWeight: "bold",
    borderRadius: "30px",
    width: "15vw",
    height: "4vw",
    radius: "30px",
  };


  return (
    <>
      {openSelect ? (
        <SCustomIconButton style={ButtonStyle} onClick={onClickFinish}>
          NEXT
          <span>
            <NavigateNextIcon />
          </span>
        </SCustomIconButton>
      ) : null}
    </>
  );
};

const circleanime = keyframes`
 0%{
    transform: scale(0.68);
  }
  100%{
    transform: scale(1.2);
    opacity: 0;
  }
`;

const SCustomIconButton = styled(IconButton)`
  background: linear-gradient(45deg, #cc7a93, #f5f29d);
  postion: relative;

  &:hover {
    transform: translateY(-0.1rem);
    background: linear-gradient(45deg, #f5f29d, #faf9d4);
    boxshadow: "0 3px 5px 2px rgba(255, 105, 135, 0.3)";
  }
  &:active {
    transform: translateY(-0.1rem);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }
  &::after {
    content: "";
    position: absolute;
    border: 2px solid #f5f29d;
    width: 140%;
    height: 140%;
    border-radius: 30px;
    opacity: 1;
    animation: 1s ${circleanime} linear infinite;
  }
  &::before {
    content: "";
    position: absolute;
    border: 1px solid #f5f29d;
    width: 140%;
    height: 140%;
    border-radius: 30px;
    opacity: 1;
    animation: 1s ${circleanime} linear infinite;
    animation-delay: 0.3s;
  }
`;
