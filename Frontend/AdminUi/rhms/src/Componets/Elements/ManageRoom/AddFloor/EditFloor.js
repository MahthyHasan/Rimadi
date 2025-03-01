import React from "react";
import Button from "../../../Atoms/Button";
import TextInputs from "../../../Atoms/TextInputs";

const EditFloor = () => {
    return (
        <div className="flex flex-col gap-2 border border-rmdYellow p-4 w-full">
            <h1 className="text-lg text-rmdGreen">Edit Floor Details</h1>
            <TextInputs type="text" label={"Edit Floor Name"} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                <TextInputs type="number" label={"Edit Floor Width (in Feet)"} />
                <TextInputs type="number" label={"Edit Floor Length (in Feet)"} />
            </div>
            <Button variant="primary" className="mt-2">Edit Floor</Button>
        </div>
    );
};

export default EditFloor;
