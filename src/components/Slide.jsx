import React from "react";

export default function Slide({ children, onClick, isOn }) {
  const buttonStyle = {
    width: "7rem",
    display: "flex",
    justifyContent: isOn ? "flex-start" : "flex-end",
  };

  return (
    <div>
      <div style={buttonStyle}>{children}</div>
      <button style={{ width: "7rem",}} onClick={onClick}>Slide {isOn ? "Right" : "Left"}</button>
    </div>
  );
}
