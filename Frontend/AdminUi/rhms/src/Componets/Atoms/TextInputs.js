import React from 'react'

const inputVariants = {
    text: "border border-rmdYellow border-2 text-rmdYellow focus:border-rmdGreen focus:text-rmdGreen bg-white",
    number: "border border-rmdYellow border-2 text-rmdYellow focus:border-rmdGreen focus:text-rmdGreen bg-white",
    date: "border border-rmdYellow border-2 text-rmdYellow focus:border-rmdGreen focus:text-rmdGreen bg-white",
  };


const TextInputs = ({ type = "text", label, className = "", ...props }) => {
  return (
    <div className="flex flex-col gap-2">
    {label && <label className="text-rmdGreen font-medium">{label}</label>}
    <input
      type={type}
      className={`px-4 py-2 rounded-md focus:outline-none transition duration-300${inputVariants[type] || inputVariants.text} ${className}`}
      {...props}
    />
  </div>
  );
};

export default TextInputs
