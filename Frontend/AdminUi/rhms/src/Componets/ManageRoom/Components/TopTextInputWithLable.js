import React from "react";
import "./mrCom.css";

const TopTextInputWithLabel = ({ label, type = "text", placeholder,  value, onChange }) => {
  return (
    <div className="mb-3">
      <label className="TopTextInputLabel">{label}</label>
      <input
        type={type}
        className="TopTextInput"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TopTextInputWithLabel;