import React, { useState } from "react";
import Button from "../../../Atoms/Button";
import TextInputs from "../../../Atoms/TextInputs";
import { usePropertyStore } from "../../../../Store/property-store";

const AddRoom = ({ floorNo }) => {
    const addRoomToFloor = usePropertyStore(state => state.addRoomToFloor);

    const [room, setRoom] = useState({
        name: "",
        width: "",
        length: "",
        positionX: "",
        positionY: ""
    });

    const handleChange = (field, value) => {
        setRoom(prev => ({ ...prev, [field]: value }));
    };

    const handleAddRoom = () => {
        addRoomToFloor(floorNo, room);
        setRoom({ name: "", width: "", length: "", positionX: "", positionY: "" });
    };

    return (
        <div className="border border-rmdYellow border-2 flex flex-col px-4">
            <h1 className="text-[1rem] text-rmdGreen">Add Room Details</h1>
            <TextInputs type="text" label="Add Room Name" value={room.name} onChange={e => handleChange('name', e.target.value)} />
            <div className="flex flex-row lg:flex-col justify-between px-6">
                <TextInputs type="number" label="Add Room Width (in Feet)" value={room.width} onChange={e => handleChange('width', e.target.value)} />
                <TextInputs type="number" label="Add Room Length (in Feet)" value={room.length} onChange={e => handleChange('length', e.target.value)} />
            </div>
            <div className="flex flex-row lg:flex-col justify-between px-6 mt-2">
                <TextInputs type="number" label="Position X (in Feet)" value={room.positionX} onChange={e => handleChange('positionX', e.target.value)} />
                <TextInputs type="number" label="Position Y (in Feet)" value={room.positionY} onChange={e => handleChange('positionY', e.target.value)} />
            </div>
            <Button variant="primary" className="mt-2" onClick={handleAddRoom}>Add Room</Button>
        </div>
    );
};

export default AddRoom;
