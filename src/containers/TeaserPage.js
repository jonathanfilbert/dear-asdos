import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Background from "../assets/bg.png";
import axios from "axios";
import Footer from "../components/Footer";

const HomePageStyle = styled.div`
  .title {
    color: white;
    font-weight: bold;
    font-family: "Roboto";
    font-weight: bold;
    font-size: 3em;
  }
  .container {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${Background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .mainInput {
    width: 60%;
    height: 3em;
    border-radius: 5px;
    padding: 10px 10px 10px 10px;
    font-size: 1em;
    box-shadow: none;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-shadow: none;
  }
  .mainContainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  .button {
    width: 5em;
    height: 2em;
    background: white;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    cursor: pointer;
    margin-top: 1em;
    font-weight: bold;
  }
`;

const HomePage = () => {
  useEffect(() => {
    localStorage.clear();
  }, []);
  return (
    <HomePageStyle>
      <div className="container">
        <div className="mainContainer">
          <div className="title">Coming Soon.</div>
        </div>
        <Footer />
      </div>
    </HomePageStyle>
  );
};

export default HomePage;
