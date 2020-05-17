import React from "react";
import { createGlobalStyle } from "styled-components";
import Background from "../assets/bg.png";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "CircularStd";
    font-style: normal;
    font-weight: normal;
    src: url("../assets/fonts/CircularStd-Medium.ttf") format("truetype");
  }

  body {
    background-image: url(${Background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export default GlobalStyles;
