import React, { useState, useEffect } from "react";

const MessagePage = () => {
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("data"));
    if (data === null) {
      window.location.replace("/");
    }
    console.log(data);
  }, []);
  return (
    <div>
      <h1>HEllo world</h1>
    </div>
  );
};

export default MessagePage;
