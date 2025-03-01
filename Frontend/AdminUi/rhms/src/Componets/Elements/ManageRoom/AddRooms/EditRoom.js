import React from "react";
import Button from "../../../Atoms/Button";
import TextInputs from "../../../Atoms/TextInputs";

const EditRoom = () => {
    return (
        <div className="border border-rmdYellow border-2 p-4 space-y-4 w-full max-w-lg mx-auto">
            <h1 className="text-lg font-semibold text-rmdGreen">Edit Room Details</h1>
            <TextInputs type="text" label={"Edit Room Name"} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextInputs type="number" label={"Edit Room Width (in Feet)"} />
                <TextInputs type="number" label={"Edit Room Length (in Feet)"} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextInputs type="number" label={"Edit Position X (in Feet)"} />
                <TextInputs type="number" label={"Edit Position Y (in Feet)"} />
            </div>

            <Button variant="primary" className="w-full md:w-auto">Edit Room</Button>
        </div>
    );
};

export default EditRoom;
