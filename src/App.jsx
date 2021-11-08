import React, { useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const faceSwichShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  if (num % 3 === 0) {
    faceShowFlag || setFaceShowFlag(!faceShowFlag);
  } else {
    faceShowFlag && setFaceShowFlag(!faceShowFlag);
  }

  return (
    <>
      <h1 style={{ color: "blue" }}>五条悟です</h1>
      <ColorfulMessage color="red">虎杖です</ColorfulMessage>
      <ColorfulMessage color="pink">釘崎です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={faceSwichShowFlag}>変わる</button>
      <p>{num}</p>
      {faceShowFlag && <p>♪(´ε｀ )</p>}
    </>
  );
};
