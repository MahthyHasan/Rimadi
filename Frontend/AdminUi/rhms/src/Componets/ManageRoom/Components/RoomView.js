import React from "react";
import { usePropertyStore } from "../../../Store/property-store";
import Room from "./Room"; // Import the Room component

function RoomView({ floor }) {
    if (!floor) {
        return <p className="text-gray-500 text-center">Please select a floor</p>;
    }

    // Get floor dimensions from store
    const { width, length } = floor;

    return (
        <div className=" border border-gray-300 rounded-lg">
            <h3 className="text-xl font-semibold">{floor.name || "Selected Floor"}</h3>

            {/* Floor Plan Container */}
            <div
                className="relative bg-gray-100 border border-gray-400 rounded-lg overflow-hidden"
                style={{
                    width: `${length * 0.5}rem`,  // Scaling the floor width
                    height: `${width * 0.5}rem`, // Scaling the floor length
                }}
            >
                {floor.rooms.length > 0 ? (
                    floor.rooms.map((room, index) => <Room key={room.id || index} room={room} />)
                ) : (
                    <p className="text-gray-500 text-center mt-10">No rooms available on this floor.</p>
                )}
            </div>
        </div>
    );
}

export default RoomView;
