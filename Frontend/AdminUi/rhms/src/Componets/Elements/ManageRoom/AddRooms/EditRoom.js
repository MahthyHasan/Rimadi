import React, { useState, useEffect } from "react";
import { usePropertyStore } from "../../../../Store/property-store";
import Button from "../../../Atoms/Button";
import TextInputs from "../../../Atoms/TextInputs";

const EditRoom = ({ floorNo, roomNo, room }) => {
    const editRoomInFloor = usePropertyStore((state) => state.editRoomInFloor);  // Correct function from the store

    const [roomData, setRoomData] = useState({
        name: "",
        width: "",
        length: "",
        positionX: "",
        positionY: ""
    });

    // Load initial room data into state when component loads
    useEffect(() => {
        if (room) {
            setRoomData({
                name: room.name || "",
                width: room.width || "",
                length: room.length || "",
                positionX: room.positionX || "",
                positionY: room.positionY || ""
            });
        }
    }, [room]);

    // Handle input changes
    const handleChange = (field, value) => {
        setRoomData((prev) => ({
            ...prev,
            [field]: value
        }));
    };

    // Edit room handler
    const handleEditRoom = () => {
        const confirmEdit = window.confirm("Are you sure you want to update this room?");
        if (confirmEdit) {
            editRoomInFloor(floorNo, roomNo, roomData);
            alert("Room updated successfully!");
        }
    };

    return (
        <div className="border border-rmdYellow border-2 p-4 space-y-4 w-full max-w-lg mx-auto">
            <h1 className="text-lg font-semibold text-rmdGreen">Edit Room Details</h1>

            <TextInputs
                type="text"
                label="Edit Room Name"
                value={roomData.name}
                onChange={(e) => handleChange("name", e.target.value)}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextInputs
                    type="number"
                    label="Edit Room Width (in Feet)"
                    value={roomData.width}
                    onChange={(e) => handleChange("width", e.target.value)}
                />
                <TextInputs
                    type="number"
                    label="Edit Room Length (in Feet)"
                    value={roomData.length}
                    onChange={(e) => handleChange("length", e.target.value)}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextInputs
                    type="number"
                    label="Edit Position X (in Feet)"
                    value={roomData.positionX}
                    onChange={(e) => handleChange("positionX", e.target.value)}
                />
                <TextInputs
                    type="number"
                    label="Edit Position Y (in Feet)"
                    value={roomData.positionY}
                    onChange={(e) => handleChange("positionY", e.target.value)}
                />
            </div>

            <Button
                variant="primary"
                className="w-full md:w-auto"
                onClick={handleEditRoom}
            >
                Edit Room
            </Button>
        </div>
    );
};

export default EditRoom;
