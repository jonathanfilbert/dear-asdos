import React, { useState, useEffect, useLayoutEffect } from "react";
import styled from "styled-components";
import Background from "../assets/bg.png";
import { Link } from "react-router-dom";

const MessagePageStyle = styled.div`
  body {
    padding: 0;
    margin: 0;
  }
  .messagePageContainer {
    width: 100vw;
    min-height: 100vh;
    background-image: url(${Background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .helloStudent {
    font-weight: bold;
    color: white;
    font-family: "Roboto";
    font-size: 3em;
  }

  .contentContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding-left: 4em;
    padding-right: 4em;
  }

  .messageStudent {
    color: white;
    font-family: "Roboto";
    font-size: 1.15em;
    text-align: justify;
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
    margin-bottom: 2em;
  }

  .button:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  @media screen and (max-width: 600px) {
    .helloStudent {
      font-size: 2em;
    }
    .messageStudent {
      font-size: 1em;
      text-align: center;
      margin-bottom: 2em;
      margin-top: 2em;
    }
  }
`;

const MessagePage = () => {
  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("data"));
    if (data === null) {
      window.location.replace("/");
    }
    setNama(data.nama);
    setPesan(data.pesan);
    setImage(data.image);
  }, []);
  return (
    <MessagePageStyle>
      <div className="messagePageContainer">
        <div className="contentContainer">
          <div className="helloStudent">Hello, {nama}</div>
          <div className="messageStudent">{pesan}</div>
          <div className="button">
            <Link
              style={{ margin: 0, textDecoration: "none", color: "black" }}
              to="/"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </MessagePageStyle>
  );
};

export default MessagePage;
