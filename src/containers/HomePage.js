import React, { useState, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Footer from "../components/Footer";
import { useSnackbar } from "material-ui-snackbar-provider";
import LoadingBar from "react-top-loading-bar";
import { useSpring, animated } from "react-spring";

const HomePageStyle = styled.div`
  .title {
    color: green;
    font-weight: bold;
  }
  .container {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .mainInput {
    outline: none;
    width: 60%;
    height: 3em;
    border-radius: 100px;
    padding: 10px 20px 10px 20px;
    font-size: 1em;
    box-shadow: none;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-shadow: none;
    border: none;
  }

  .mainInput:focus {
    border: none;
    outline: none;
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
    display: inline-block;
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
    padding-left: 1em;
    padding-right: 1em;
  }

  .button:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  .heroTitle {
    font-family: "CircularStd", "Arial";
    color: white;
    font-size: 4em;
    max-width: 100%;
    margin-bottom: 0.5em;
    text-align: center;
    font-weight: bold;
  }

  @media screen and (max-width: 600px) {
    .mainInput {
      font-size: 1em;
    }
    .heroTitle {
      font-size: 2em;
    }
    .mainInput {
      height: 2em;
    }
  }
`;

const HomePage = () => {
  const [userInput, setUserInput] = useState("");
  const history = useHistory();
  const snackbar = useSnackbar();
  const ref = useRef();
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    width: "100%",
    height: "100%",
  });
  const handleChange = (e) => {
    setUserInput(e);
  };

  const handleSubmit = () => {
    ref.current.continuousStart(10);
    axios({
      method: "post",
      url: "https://mubarok-api.herokuapp.com/api/get-story/",
      data: {
        secret: `${userInput}`,
      },
    }).then((res) => {
      ref.current.complete();
      if (!res.data.isError) {
        let data = {
          nama: res.data.nama,
          pesan: res.data.pesan,
          img: res.data.img,
        };
        localStorage.setItem("data", JSON.stringify(data));
        history.push("/message");
      } else {
        setUserInput("");
        snackbar.showMessage("Wrong secret, ask Jonathan for the correct one.");
      }
    });
  };
  return (
    <HomePageStyle>
      <div className="container">
        <LoadingBar height={3} color="#f11946" ref={ref} />
        <animated.div className="mainContainer" style={props}>
          <div className="heroTitle">
            Satu Mata Kuliah.
            <br /> Berjuta Cerita.
          </div>
          <input
            value={userInput}
            onChange={(e) => handleChange(e.target.value)}
            placeholder="Enter Secret Code"
            className="mainInput"
          />
          <div onClick={() => handleSubmit()} className="button">
            Go
          </div>
          <Footer />
        </animated.div>
      </div>
    </HomePageStyle>
  );
};

export default HomePage;
