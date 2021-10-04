import React from "react";
import { useHistory } from "react-router-dom";
import backgroundImage from "./background1.png";
import { Button } from "@material-ui/core";
import styled, { keyframes } from "styled-components";
import axios from "axios";

export const Home = () => {
  const buttonStyle = {
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
    borderRadius: "30px",
    height: "48px",
    width: "160px",
    radius: "30px",
  };

  const history = useHistory();

  const onClickSubmitArea = () => {
    const Clear = () => {
      axios.post("/delete", { course: true });
    };
    Clear();
    history.push("/simple");
  };

  const onClickSubmitManyImage = () => {
    const Clear = () => {
      axios.post("/delete", { course: false });
    };
    Clear();
    history.push("/fullscale");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Background>
        <Title>
          <SlideInRight>MAKE</SlideInRight>
          <SlideInLeft>
            <span style={{ color: "#35007d" }}>MOSA</span>
            <span style={{ color: "#5300c4" }}>IC</span>
            <span style={{ color: "#8600ac" }}>ON</span>
          </SlideInLeft>
          <Div>
            <StyledButton1 style={buttonStyle} onClick={onClickSubmitArea}>
              SIMPLE
            </StyledButton1>
            <StyledButton2 style={buttonStyle} onClick={onClickSubmitManyImage}>
              FULLSCALE
            </StyledButton2>
          </Div>
        </Title>
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
  font-size: calc(10px + 2vmin);
  box-sizing: border-box;
  border: solid 10px;
  border-color: #505867;
  margin: 0px;
  padding: 0px;
`;

const Title = styled.h1`
  display: flex;
  flex-direction: column;
  position: relative;
  top: -70px;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  gap: 0 70px;
  position: absolute;
  bottom: -45%;
  left: 20%;
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
    transform: translateY(-0.2rem);
    background: linear-gradient(45deg, red, blue);
    boxshadow: "0 3px 5px 2px rgba(255, 105, 135, 0.3)";
  }

  &:active {
    transform: translateY(-0.1rem);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }
`;

const StyledButton2 = styled(Button)`
  background: linear-gradient(45deg, red 30%, #ff8e53 90%);
  &:hover {
    transform: translateY(-0.2rem);
    background: linear-gradient(45deg, red, blue);
    boxshadow: "0 3px 5px 2px rgba(255, 105, 135, 0.3)";
  }
  &:active {
    transform: translateY(-0.1rem);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }
`;

const SlideInRight = styled.span`
  animation: ${slideInRight} 1.25s cubic-bezier(0.25, 1, 0.75, 1.5) 1 forwards;
  font-size: 60px;
  font-weight: 700;
  letter-spacing: 10px;
  padding: 0px;
  margin-bottom: -20px;
`;

const SlideInLeft = styled.div`
  animation: ${slideInLeft} 1.25s cubic-bezier(0.25, 1, 0.75, 1.5) 1 forwards;
  font-size: 100px;
  font-weight: 700;
  letter-spacing: 10px;
  padding: 0px;
  margin: 0px;
`;
