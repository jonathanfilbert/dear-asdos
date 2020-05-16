import React from "react";
import styled from "styled-components";

const FooterStyle = styled.div`
  width: 100%;
  height: 3em;
  .jofil {
    font-weight: bold;
    font-size: 1em;
    color: white;
  }
  .footerContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

const Footer = () => {
  return (
    <FooterStyle>
      <div className="footerContainer">
        <div className="jofil">"JONATHAN FILBERT"</div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
