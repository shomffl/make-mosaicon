import React from "react";
import backgroundImage from "../background1.png";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import styled, { keyframes } from "styled-components";

export const AppExplanationDisplay = () => {
  const history = useHistory();
  const ButtonStyle = {
    color: "white",
    fontSize: "2vmax",
    fontWeight: "bold",
    borderRadius: "30px",
    height: "4vmax",
    width: "15vmax",
    border: "0.2vmax solid silver",
  };

  const onClickHome = () => {
    history.push("/home");
  };

  const onClickFunctionExplain = () => {
    history.push("/function");
  };

  return (
    <>
      <Background>
        <Title>
          <span>ようこそ「</span>
          <span style={{ color: "#E64552" }}>MAKE&ensp;</span>
          <span style={{ color: "#35007d" }}>MOSA</span>
          <span style={{ color: "#5300c4" }}>IC</span>
          <span style={{ color: "#8600ac" }}>ON</span>
          <span>」へ!!</span>
        </Title>
        <TextPosition>
          <ExplainApp1>
            <span>▽&ensp;</span>
            <span style={{ color: "#E64552" }}>MAKE&ensp;</span>
            <span style={{ color: "#35007d" }}>MOSA</span>
            <span style={{ color: "#5300c4" }}>IC</span>
            <span style={{ color: "#8600ac" }}>ON</span>
            <span>とは？</span>
          </ExplainApp1>
          <ExplainApp2>
            <span>→ モザイクアートを作成するアプリです。</span>
          </ExplainApp2>

          <ExplainMosaicArt1>
            <span>▽ モザイクアートとは?</span>
          </ExplainMosaicArt1>

          <ExplainMosaicArt2>
            <span>
              → 小さな画像を大量に使って1枚の写真を作り上げるアートです。
            </span>
          </ExplainMosaicArt2>
        </TextPosition>

        <ButtonPosition>
          <SCustomButton style={ButtonStyle} onClick={onClickFunctionExplain}>
            <span>機能説明</span>
          </SCustomButton>

          <SCustomButton2 style={ButtonStyle} onClick={onClickHome}>
            <span>START ⇒</span>
          </SCustomButton2>
        </ButtonPosition>
      </Background>
    </>
  );
};

const Background = styled.header`
  background-image: linear-gradient(
      to right bottom,
      rgba(220, 220, 220, 0.8),
      rgba(220, 220, 220, 0.8)
    ),
    url(${backgroundImage});
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border: solid 10px;
  border-color: #505867;
`;

const slideInLeft = keyframes`
  0% {
    transform: translateX(-180px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
  }
  40%,100% {
    opacity: 1;
  }
`;

const fadeIn = keyframes` {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}`;

const Title = styled.div`
  animation: ${slideInLeft} 1.25s cubic-bezier(0.25, 1, 0.75, 1.5) 1 forwards;
  position: relative;
  bottom: 6vmax;
  font-size: 4.5vw;
  font-weight: bold;
  letter-spacing: 0.2vmax;
`;

const TextPosition = styled.div`
  animation: ${fadeIn} 4s 1 forwards;
  position: relative;
  bottom: 4vw;
`;

const ExplainApp1 = styled.div`
  font-size: 3.5vmax;
  font-weight: bold;
  letter-spacing: 0.2vmax;
`;

const ExplainApp2 = styled.div`
  font-size: 2.5vmax;
  font-weight: bold;
  letter-spacing: 0.2vmax;
  padding: 0 0 2vmax;
`;

const ExplainMosaicArt1 = styled.div`
  font-size: 3.5vmax;
  font-weight: bold;
  letter-spacing: 0.2vmax;
`;

const ExplainMosaicArt2 = styled.div`
  font-size: 2.5vmax;
  font-weight: bold;
  letter-spacing: 0.2vmax;
`;

const ButtonPosition = styled.div`
  position: relative;
  top: 2vmax;
  display: flex;
  gap: 0 15vmax;
`;

const circleanime = keyframes`
 0%{
    transform: scale(0.68);
  }
  100%{
    transform: scale(1.2);
    opacity: 0;
  }
`;

const SCustomButton = styled(Button)`
  background: linear-gradient(45deg, #ff9ae3, #ff5f82);

  &:hover {
    transform: translateY(-0.1rem);
    background: linear-gradient(45deg, #ff9ae3, #faf9d4);
    boxshadow: "0 3px 5px 2px rgba(255, 105, 135, 0.3)";
  }
  &:active {
    transform: translateY(-0.1rem);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }
  &::after {
    content: "";
    position: absolute;
    border: 2px solid #ff9ae3;
    width: 140%;
    height: 140%;
    border-radius: 30px;
    opacity: 1;
    animation: 1s ${circleanime} linear infinite;
  }
  &::before {
    content: "";
    position: absolute;
    border: 1px solid #ff9ae3;
    width: 140%;
    height: 140%;
    border-radius: 30px;
    opacity: 1;
    animation: 1s ${circleanime} linear infinite;
    animation-delay: 0.3s;
  }
`;

const SCustomButton2 = styled(Button)`
  background: linear-gradient(45deg, #ccaacc, #cc3dcc);

  &:hover {
    transform: translateY(-0.1rem);
    background: linear-gradient(45deg, #cc3dcc, #faf9d4);
    boxshadow: "0 3px 5px 2px rgba(255, 105, 135, 0.3)";
  }
  &:active {
    transform: translateY(-0.1rem);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }
`;
