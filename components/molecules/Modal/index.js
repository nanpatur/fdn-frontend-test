import React, { useState } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  const modalStyle = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const modalContentStyle = {
    background: "white",
    padding: "20px",
    borderRadius: "4px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
  };

  const closeButtonStyle = {
    background: "none",
    border: "none",
    fontSize: "20px",
    cursor: "pointer",
    float: "right",
  };

  return (
    <div style={modalStyle}>
      <div style={modalContentStyle}>
        <button style={closeButtonStyle} onClick={onClose}>
          X
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
