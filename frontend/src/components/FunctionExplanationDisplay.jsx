import React from "react";
import { useHistory } from "react-router-dom";
import backgroundImage from "../background1.png";
import styled, { keyframes } from "styled-components";
import { Button } from "@material-ui/core";

export const FunctionExplanationDisplay = () => {
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

  return (
    <Background>
      <div>
        <ExplainRequirements>
          <div style={{ fontSize: "2.5vw", fontWeight: "bold" }}>
            ▽ まず初めに…
          </div>
          <div style={{ fontSize: "1.5vw" }}>
            モザイクアートを作成するには、モザイクアートに変換したい画像が１枚、モザイクアートの素材となる画像が100枚以上必要になります。
          </div>

          <div style={{ fontSize: "1.5vw" }}>
            しかし、素材の画像を100枚以上用意するのも大変ですよね？
          </div>
          <div style={{ fontSize: "1.5vw" }}>
            そこで今回は素材の画像を用意せずとも手軽にモザイクアートを作成することが出来る機能を設けました。
          </div>
        </ExplainRequirements>

        <ExplainMode>
          <div style={{ fontSize: "2.5vw", fontWeight: "bold" }}>
            ▽ 2種類のモードについて
          </div>
          <div style={{ fontSize: "2vw", fontWeight: "bold" }}>
            ⇒ Simpleモード
          </div>
          <div style={{ fontSize: "1.5vw" }}>
            このモードではモザイクアート作成に必要な大量の素材画像を用意する必要がありません。モザイクアートに変換したい画像1枚用意するだけで簡単に作成することができます。手軽にモザイクアートを楽しみたい人にはSimpleモードがおすすめです。
          </div>
          <br />
          <div style={{ fontSize: "2vw", fontWeight: "bold" }}>
            ⇒ FullScaleモード
          </div>
          <div style={{ fontSize: "1.5vw" }}>
            このモードではモザイクアート作成に必要な大量の素材画像を用意する必要があります。しかし、その分オリジナリティのあるものを作れます。家族や友人とのたくさんの思い出を一枚のアートに閉じ込めたい人にはFullScaleモードがおすすめです。
          </div>
        </ExplainMode>
      </div>

      <SCustomButton style={ButtonStyle} onClick={onClickHome}>
        <span>START ⇒</span>
      </SCustomButton>
    </Background>
  );
};

const fadeIn = keyframes` {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}`;

const Background = styled.header`
  animation: ${fadeIn} 3s cubic-bezier(0.25, 1, 0.75, 1.5) 1 forwards;

  background-image: linear-gradient(
      to right bottom,
      rgba(220, 220, 220, 0.8),
      rgba(220, 220, 220, 0.8)
    ),
    url(${backgroundImage});
  background-size: cover;
  min-height: 120vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: solid 10px;
  border-color: #505867;
`;

const ExplainRequirements = styled.div`
  position: relative;
  top: -2vmax;
`;

const ExplainMode = styled.div`
  position: relative;
  top: 1vmax;
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
  positoin: relative;
  top: 5vmax;

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
