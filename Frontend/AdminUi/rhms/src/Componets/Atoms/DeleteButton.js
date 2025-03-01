import React from 'react'

const DeleteButton = ({ onClick, label = "Delete" }) => {
    return (
      <button
        onClick={onClick}
        className="bg-rmdRed hover:bg-rmdRed2 text-rmdGreen hover:text-rmdYellow font-medium py-2 px-4 rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      >
        {label}
      </button>
    );
  };

export default DeleteButton
