import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Background from "../assets/bg.png";
import axios from "axios";
import { Redirect, Link, useHistory } from "react-router-dom";
import Footer from "../components/Footer";

const HomePageStyle = styled.div`
  .title {
    color: green;
    font-family: "Roboto";
    font-weight: bold;
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

  .button:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const HomePage = () => {
  const [userInput, setUserInput] = useState("");
  const history = useHistory();
  const handleChange = (e) => {
    setUserInput(e);
  };

  const handleSubmit = () => {
    axios({
      method: "post",
      url: "https://mubarok-api.herokuapp.com/api/get-story/",
      data: {
        secret: `${userInput}`,
      },
    }).then((res) => {
      console.log(res);
      if (!res.data.isError) {
        let data = {
          nama: res.data.nama,
          pesan: res.data.pesan,
          img: res.data.img,
        };
        localStorage.setItem("data", JSON.stringify(data));
        history.push("/message");
      } else {
        alert("Secret code salah");
      }
    });
  };
  return (
    <HomePageStyle>
      <div className="container">
        <div className="mainContainer">
          <input
            onChange={(e) => handleChange(e.target.value)}
            placeholder="Enter Secret Code"
            className="mainInput"
          />
          <div onClick={() => handleSubmit()} className="button">
            Go
          </div>
        </div>
        <Footer />
      </div>
    </HomePageStyle>
  );
};

export default HomePage;
