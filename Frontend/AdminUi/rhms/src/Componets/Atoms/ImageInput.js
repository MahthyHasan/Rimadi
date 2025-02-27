import React from 'react';

const ImageInput = ({ label, className = "", ...props }) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-rmdGreen font-medium">{label}</label>}
      <div className="relative">
        {/* Custom button for the file input */}
        <input
          type="file"
          accept="image/*"
          multiple
          className={`absolute inset-0 opacity-0 cursor-pointer`} // Hide the default button
          {...props}
        />
        <button
          type="button"
          className="w-full py-2 bg-rmdGreen text-rmdYellow rounded-md text-center font-medium"
        >
          Choose Images
        </button>
      </div>
    </div>
  );
};

export default ImageInput;
