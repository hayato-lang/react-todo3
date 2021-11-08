import React, { useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  const [num, setNum] = useState(0);
  const onClickCountUp = () => {
    setNum(num + 1);
    if (num % 3 === 0) {
    }
  };
  return (
    <>
      <h1 style={{ color: "blue" }}>五条悟です</h1>
      <ColorfulMessage color="red">虎杖です</ColorfulMessage>
      <ColorfulMessage color="pink">釘崎です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
};
