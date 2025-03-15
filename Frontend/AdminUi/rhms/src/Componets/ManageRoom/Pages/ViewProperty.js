import React, { useState } from "react";
import Layout from "../../../Layout/Layout";
import SelectFloor from "../Components/SelectFloor";
import RoomView from "../Components/RoomView";
import { usePropertyStore } from "../../../Store/property-store";

function ViewProperty() {
	const propertyData = usePropertyStore((state) => state.property);
	const [selectedFloor, setSelectedFloor] = useState(null);

	return (
		<Layout>
			<div className="bg-white text-rmdGreen min-h-screen border-2 border-rmdYellow rounded-lg p-5">
				<div className="grid grid-flow-col grid-rows-6 grid-col-6 gap-4">
					<div className="row-span-3 col-span-4 col-end-4 row-end-3">
						<div className="flex items-start space-x-5">
							<img
								src="https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI="
								alt="Blue Villa"
								className="w-40 h-40 rounded-lg"
							/>
							<div>
								<h2 className="text-2xl font-bold">{propertyData.name || "Property Name"}</h2>
								<p className="mt-[-1rem]">{propertyData.town || "Location"}</p>
								<p className="mt-[-1rem]">Luxury, AC, Non AC</p>
								<p className="mt-[-1rem] font-semibold">Available</p>
								<p className="text-sm mt-[-1rem]">Total No of Floors: {propertyData.floorCount || 0}</p>
								<div className="flex items-center space-x-2 mt-[-1rem]">
									<span className="text-yellow-500">⭐ {propertyData.rating || "N/A"}</span>
									<span className="text-gray-300">👤 50 Persons</span>
								</div>
							</div>
						</div>
					</div>

					<div className="col-span-2 row-start-3 row-span-2 col-end-2" >
						<div className="flex">
							<div className="space-y-3">
								<SelectFloor onSelectFloor={setSelectedFloor} />
							</div>
						</div>
					</div>

					<div className="col-span-4 row-span-4 row-end-6 col-end-7">
						<div className="flex-1">
							{selectedFloor ? (
								<RoomView floor={selectedFloor} />
							) : (
								<p className="text-gray-500 text-center">Please select a floor</p>
							)}
						</div>
						<div className="flex justify-center items-center mt-5">
							<button className="bg-red-600 hover:bg-red-700 text-rmdGreen px-5 py-2 rounded-lg font-semibold">
								Delete Property
							</button>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default ViewProperty;
