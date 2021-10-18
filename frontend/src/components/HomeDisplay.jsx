import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import backgroundImage from "../background1.png";
import { Button } from "@material-ui/core";
import styled, { keyframes } from "styled-components";
import { ReadFunctionExplanation } from "./ReadFunctionExplanation";
import axios from "axios";

//モード選択用の画面
export const HomeDisplay = () => {
  const buttonStyle = {
    color: "white",
    fontSize: "1.5vw",
    fontWeight: "bold",
    borderRadius: "30px",
    height: "4vw",
    width: "13vw",
    border: "1px solid silver",
  };

  //画面遷移時に必要なフォルダを生成
  useEffect(() => {
    axios.get("/make").then((response) => {
      console.log(response.data.message);
    });
  }, []);

  const history = useHistory();

  //オリジナル画像選択画面へ遷移
  const onClickSubmitOriginalArea = () => {
    const Clear = () => {
      axios.post("/delete", { course: true }).then((response) => {
        console.log(response.data.message);
      });
    };
    Clear();
    history.push("/simple");
  };

  //素材画像選択画面へ遷移
  const onClickSubmitMaterialArea = () => {
    const Clear = () => {
      axios.post("/delete", { course: false }).then((response) => {
        console.log(response.data.message);
      });
    };
    Clear();
    history.push("/fullscale");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Background>
        <ReadPosition>
          <ReadFunctionExplanation />
        </ReadPosition>

        <Title>
          <SlideInRight>MAKE</SlideInRight>

          <SlideInLeft>
            <span style={{ color: "#35007d" }}>MOSA</span>
            <span style={{ color: "#5300c4" }}>IC</span>
            <span style={{ color: "#8600ac" }}>ON</span>
          </SlideInLeft>
        </Title>

        <ButtonPosition>
          <StyledButton1 style={buttonStyle} onClick={onClickSubmitOriginalArea}>
            SIMPLE
          </StyledButton1>
          <StyledButton2 style={buttonStyle} onClick={onClickSubmitMaterialArea}>
            FULLSCALE
          </StyledButton2>
        </ButtonPosition>
      </Background>
    </div>
  );
};

const Background = styled.header`
  background-image: linear-gradient(
      to right bottom,
      rgba(200, 200, 200, 0.3),
      rgba(150, 150, 150, 0.5)
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
  margin: 0px;
  padding: 0px;
  position: relative;
`;

const ReadPosition = styled.div`
  position: absolute;
  top: 1vw;
  left: 1vw;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  bottom: 5vmax;
`;

const ButtonPosition = styled.div`
  display: flex;
  gap: 0 5vmax;
  position: relative;
  bottom: 3vmax;
`;

const slideInRight = keyframes`
  0% {
    transform: translateX(180px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
  }
  40%,100% {
    opacity: 1;
  }
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

const StyledButton1 = styled(Button)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  &:hover {
    transform: translateY(-0.2vw);
    background: linear-gradient(45deg, red, blue);
    boxshadow: "0 3px 5px 2px rgba(255, 105, 135, 0.3)";
  }

  &:active {
    transform: translateY(-0.1vw);
    box-shadow: 0 0.5vw 1vw rgba(0, 0, 0, 0.2);
  }
`;

const StyledButton2 = styled(Button)`
  background: linear-gradient(45deg, red 30%, #ff8e53 90%);
  &:hover {
    transform: translateY(-0.2vw);
    background: linear-gradient(45deg, red, blue);
    boxshadow: "0 3px 5px 2px rgba(255, 105, 135, 0.3)";
  }
  &:active {
    transform: translateY(-0.1vw);
    box-shadow: 0 0.5vw 1vw rgba(0, 0, 0, 0.2);
  }
`;

const SlideInRight = styled.div`
  animation: ${slideInRight} 1.25s cubic-bezier(0.25, 1, 0.75, 1.5) 1 forwards;
  font-size: 5vmax;
  font-weight: 700;
  letter-spacing: 1vmax;
  padding: 0px;
  margin-bottom: -2vmax;
`;

const SlideInLeft = styled.div`
  animation: ${slideInLeft} 1.25s cubic-bezier(0.25, 1, 0.75, 1.5) 1 forwards;
  font-size: 8vmax;
  font-weight: 700;
  letter-spacing: 1vmax;
  padding: 0px;
  margin: 0px;
`;
