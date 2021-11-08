import React from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  const onClickButton = () => {
    alert("戻す");
  };
  return (
    <>
      <h1 style={{ color: "blue" }}>五条悟です</h1>
      <ColorfulMessage color="red">虎杖です</ColorfulMessage>
      <ColorfulMessage color="pink">釘崎です</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
