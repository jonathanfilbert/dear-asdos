import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSpring, animated } from "react-spring";

const FooterStyle = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  .jofil {
    font-weight: bold;
    font-size: 1em;
    color: white;
  }
  .footerContainer {
    padding-bottom: 2em;
  }
`;

const Footer = () => {
  const [hasMessage, setHasMessage] = useState(false);
  const history = useHistory();
  const props = useSpring({
    marginBottom: 0,
    from: { marginBottom: -500 },
  });

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("data"));
    if (data !== null) {
      setHasMessage(true);
    }
  }, []);

  const seeMessage = () => {
    history.push("/message");
  };

  return (
    <FooterStyle>
      <animated.div className="footerContainer" style={props}>
        {hasMessage ? (
          <animated.div onClick={() => seeMessage()} className="button">
            See Message
          </animated.div>
        ) : (
          <div className="jofil">"JONATHAN FILBERT"</div>
        )}
      </animated.div>
    </FooterStyle>
  );
};

export default Footer;
