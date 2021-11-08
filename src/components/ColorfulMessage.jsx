import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "45px"
  };
  return <p style={contentStyle}>{children}</p>;
};
