import React from "react";
import Button from "../../../Atoms/Button";
import TextInputs from "../../../Atoms/TextInputs";

const EditFloor = () => {
	return (
		<div className="flex flex-col lg:flex-row justify-between px-4">
			<>
				<div className="border border-rmdYellow border-2 flex flex-col">
					<h1 className="text-[1rem] text-rmdGreen">Edit Floors Details</h1>
					<TextInputs type="text" label={"Edit Floor Name"} />
					<div className="flex flex-row lg:flex-col justify-between px-6">
						<TextInputs type="number" label={"Edit Floor Width (in Feet)"} />
						<TextInputs type="number" label={"Edit Floor Length (in Feet)"} />
					</div>
					<Button variant="primary" children={"Edit Floor"} className="mt-2" />
				</div>
			</>
		</div>
	);
};

export default EditFloor;
