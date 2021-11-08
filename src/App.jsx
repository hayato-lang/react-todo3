import React from "react";

export const App = () => {
  const ColorfulMessage = {
    color: "red",
    fontSize: "45px"
  };
  const onClickButton = () => {
    alert("戻す");
  };
  return (
    <>
      <h1 style={{ color: "blue" }}>五条悟です</h1>
      <p style={ColorfulMessage}>虎杖です</p>
      <p>伏黒です</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
