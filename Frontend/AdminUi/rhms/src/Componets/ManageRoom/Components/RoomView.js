import React from "react";

function RoomView() {
	return (
		<div>
			<h3 className="text-xl font-semibold">Rooms View</h3>
			<div className="grid grid-cols-4 gap-4 mt-3">
				{Array(12)
					.fill(null)
					.map((_, index) => (
						<div
							key={index}
							className={`flex items-center justify-center rounded-lg px-3 py-5 text-rmdGreen ${
								index % 3 === 0
									? "bg-green-600"
									: index % 5 === 0
									? "bg-red-600"
									: "bg-teal-900"
							} border border-yellow-500`}>
							Room {index + 1}
						</div>
					))}
			</div>
		</div>
	);
}

export default RoomView;
