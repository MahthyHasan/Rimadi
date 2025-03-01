import React from "react";
import Button from "../../../Atoms/Button";
import TextInputs from "../../../Atoms/TextInputs";

const AddRoom = () => {
	return (
		<div className="border border-rmdYellow border-2 flex flex-col">
			<h1 className="text-[1rem] text-rmdGreen">Add Room Details</h1>
			<TextInputs type="text" label={"Add Room Name"} />
			<div className="flex flex-row lg:flex-col justify-between px-6">
				<TextInputs type="number" label={"Add Room Width (in Feet)"} />
				<TextInputs type="number" label={"Add Room Length (in Feet)"} />
			</div>
            <div className="flex flex-row lg:flex-col justify-between px-6 mt-2">
				<TextInputs type="number" label={"Position X (in Feet)"} />
				<TextInputs type="number" label={"Position Y (in Feet)"} />
			</div>
			<Button variant="primary" children={"Add Room"} className="mt-2" />
		</div>
	);
};

export default AddRoom;
