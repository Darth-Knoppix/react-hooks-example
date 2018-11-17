import React from "react";

export default function Modal({ children, onClick, isOn }) {
  const modalStyle = {
    width: "100%",
    height: "5rem",
    borderRadius: "3px",
    backgroundColor: "#ccc",
    display: isOn ? "block" : "none",
    padding: "1rem",
    marginTop: "1rem"
  };

  return (
    <div style={{ width: "100%", alignSelf: "baseline" }}>
      <button onClick={onClick}>{children}</button>
      <br />
      <div style={modalStyle}>What's in here?</div>
    </div>
  );
}
