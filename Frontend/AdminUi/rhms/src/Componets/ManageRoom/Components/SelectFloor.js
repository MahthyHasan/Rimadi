import React, { useState } from "react";
import { usePropertyStore } from "../../../Store/property-store.js";
import Button from "../../Atoms/Button.js";

function SelectFloor({ onSelectFloor }) {
	const floors = usePropertyStore((state) => state.property.floors);

	return (
		<div className="max-w-full min-w-4">
			<h3 className="text-xl font-semibold">Select Floor</h3>
			{floors.length > 0 ? (
				floors.map((floor, index) => (
					<Button 
						key={floor.id || index}
						variant="primary"
						onClick={() => onSelectFloor(floor)}
					>
						{floor.name || `Floor ${index + 1}`} 
					</Button>
				))
			) : (
				<p className="text-gray-500">No floors available</p>
			)}
		</div>
	);
}

export default SelectFloor;
