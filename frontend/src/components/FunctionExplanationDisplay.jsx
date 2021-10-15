import React from "react";
import backgroundImage from "../background1.png";
import styled, { keyframes } from "styled-components";


export const FunctionExplanationDisplay = () => {

  return (

    <Background>


    </Background>
  )

}



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
