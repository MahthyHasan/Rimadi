import React from "react";

function SelectFloor() {
	return (
		<div>
			<h3 className="text-xl font-semibold">Select Floor</h3>
			{["Floor 1", "Floor 2", "Floor 3", "Floor 4"].map((floor) => (
				<button
					key={floor}
					className="w-full px-4 py-2 bg-teal-900 rounded-lg hover:bg-teal-800 border border-yellow-500">
					{floor}
				</button>
			))}
		</div>
	);
}

export default SelectFloor;
