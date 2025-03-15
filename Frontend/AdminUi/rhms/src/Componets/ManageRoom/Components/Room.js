import React from "react";

function Room({ room }) {
    return (
        <div
            className={`absolute bg-rmdGreen hover:bg-rmdYellow text-rmdYellow hover:text-rmdGreen flex items-center justify-center
                ${room.status === "Available" ? "bg-green-500" : "bg-red-500"}`}
            style={{
                width: `${room.width * 0.5}rem`, // Scale width
                height: `${room.length * 0.5}rem`, // Scale height
                left: `${room.positionX * 0.5}rem`, // Position X
                top: `${room.positionY * 0.5}rem`, // Position Y
            }}
        >
            <div className="text-center">
                <p className="text-[1rem]">{room.name}</p>
                <p className="text-[1rem]">{room.status}</p>
            </div>
        </div>
    );
}

export default Room;
