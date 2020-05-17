import { createGlobalStyle } from "styled-components";
import Background from "../assets/bg.png";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "CircularStd";
    src: url("../assets/fonts/CircularStd-Medium.ttf") format("truetype");
    font-weight: normal;
  }

  @font-face {
    font-family: "CircularStd";
    src: url("../assets/fonts/CircularStd-Bold.ttf") format("truetype");
    font-weight: bold;
  }

  body {
    background-image: url(${Background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    font-family: "CircularStd","Arial";
  }

`;

export default GlobalStyles;
