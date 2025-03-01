import React from "react";
import Button from "../../../Atoms/Button";
import TextInputs from "../../../Atoms/TextInputs";
import Accordion from "react-bootstrap/Accordion";

const EditRoom = () => {
	return (
		<div className="flex flex-col lg:flex-row justify-between px-4">
			<>
				<div className="border border-rmdYellow border-2 flex flex-col">
					<h1 className="text-[1rem] text-rmdGreen">Edit Room Details</h1>
					<TextInputs type="text" label={"Edit Room Name"} />
					<div className="flex flex-row lg:flex-col justify-between px-6">
						<TextInputs type="number" label={"Edit Room Width (in Feet)"} />
						<TextInputs type="number" label={"Edit Room Length (in Feet)"} />
					</div>
                    <div className="flex flex-row lg:flex-col justify-between px-6">
						<TextInputs type="number" label={"Edit Position X (in Feet)"} />
						<TextInputs type="number" label={"Edit Position Y (in Feet)"} />
					</div>
					<Button variant="primary" children={"Edit Room"} className="mt-2" />
				</div>
			</>
		</div>
	);
};

export default EditRoom;
