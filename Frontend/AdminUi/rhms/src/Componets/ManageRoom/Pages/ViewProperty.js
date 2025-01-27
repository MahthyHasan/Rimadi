import React from "react";
import Layout from "../../../Layout/Layout";
import SelectFloor from "../Components/SelectFloor";
import RoomView from "../Components/RoomView";

function ViewProperty() {
	return (
		<Layout>
			<div className="bg-white text-rmdGreen min-h-screen border-2 border-rmdYellow rounded-lg p-5">
				<div class="grid grid-flow-col grid-rows-3 gap-4">
					<div class="">
						<div className="flex items-start space-x-5">
							<img
								src="https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI="
								alt="Blue Villa"
								className="w-40 h-40 rounded-lg"
							/>
							<div>
								<h2 className="text-2xl font-bold">Blue Villa</h2>
								<p className="mt-[-1rem]">Batticaloa, Sri Lanka</p>
								<p className="mt-[-1rem]">Luxury, AC, Non AC</p>
								<p className="mt-[-1rem] font-semibold">Available</p>
								<p className="text-sm mt-[-1rem]">Total No of Rooms: 10</p>
								<div className="flex items-center space-x-2 mt-[-1rem]">
									<span className="text-yellow-500">⭐ 8.9</span>
									<span className="text-gray-300">👤 50 Persons</span>
								</div>
							</div>
						</div>
					</div>
					<div class="row-span-2">
						<div className="flex space-x-5">
							<div className="space-y-3">
                                <SelectFloor />
							</div>
						</div>
					</div>
					<div class="col-span-2 row-span-3">
						<div className="flex-1">
                            <RoomView />							
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
