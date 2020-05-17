import React, { useState, useEffect, useLayoutEffect } from "react";
import styled from "styled-components";
import Background from "../assets/bg.png";
import { Link, useHistory } from "react-router-dom";
import { useSpring, animated } from "react-spring";

const MessagePageStyle = styled.div`
  font-family: "Arial";
  body {
    padding: 0;
    margin: 0;
  }
  .messagePageContainer {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .helloStudent {
    color: white;
    font-weight: bold;
    font-size: 3em;
  }

  .contentContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding-left: 5em;
    padding-right: 5em;
  }

  .messageStudent {
    color: white;
    font-size: 1.3em;
    text-align: justify;
    width: 100%;
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
    .contentContainer {
      padding-left: 1em;
      padding-right: 1em;
    }
    .helloStudent {
      font-size: 2em;
    }
    .messageStudent {
      font-size: 1.2em;
      text-align: center;
      margin-bottom: 2em;
      margin-top: 2em;
      overflow-wrap: break-word;
    }
  }
`;

const MessagePage = () => {
  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");
  const history = useHistory();
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  });

  const onSubmit = () => {
    history.push("/");
  };

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("data"));
    if (data === null) {
      history.push("/");
    } else {
      setNama(data.nama);
      setPesan(data.pesan);
    }
  }, [history]);
  return (
    <MessagePageStyle>
      <div className="messagePageContainer">
        <div className="contentContainer">
          <animated.div style={props}>
            <div className="helloStudent">Dear, {nama}</div>
            <div className="messageStudent">{pesan}</div>
            <div className="messageStudent" style={{ marginTop: "1em" }}>
              'til we meet again,
              <br />
              Jonathan.
            </div>
            <div className="button" onClick={() => onSubmit()}>
              Home
            </div>
          </animated.div>
        </div>
      </div>
    </MessagePageStyle>
  );
};

export default MessagePage;
