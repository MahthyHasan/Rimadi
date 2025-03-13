import React from "react";
import { usePropertyStore } from "../../../Store/property-store";
import { useNavigate } from "react-router-dom";

function PropertiesSingleCard({ property, image }) {
	const { setSelectedProperty } = usePropertyStore(); 
	const navigate = useNavigate();
	const handlePropertyClick = async () => {
        await setSelectedProperty(property._id); // Fetch and update Zustand state
        navigate("/manageR/viewProperty/"); 
    };
	return (
		<div className="bg-rmdYellow/30 shadow-lg rounded-lg p-4 mt-2 w-full flex flex-col md:flex-row gap-2" onClick={handlePropertyClick}>
			<div className="md:w-1/4 flex justify-center items-top">
				<img
					src={image}
					className="rounded-full w-[4rem] h-[4rem] object-cover"
				/>
			</div>
			<div className="md:w-3/4 flex flex-col justify-between">
				<div>
					<h2 className="text-lg font-bold text-rmdGreen truncate">{property.name}</h2>
					<p className="text-sm text-rmdGreen mt-[-10px] truncate">{property.district}</p>
					<p className="text-sm text-rmdGreen mt-[-20px]">
						{property.availability ? (
							<p className="text-green-500">Available</p>
						) : (
							<p className="text-red-500">Not Available</p>
						)}
					</p>
				</div>
				<div className="mt-1 md:mt-0">
					<ul className="flex flex-col md:flex-row justify-center gap-1 ml-[-35px]">
						<li>
							<p className="text-sm text-rmdGreen">
								<strong>Check-In Time:</strong> {property.checkIn}
							</p>
						</li>
						<li>
							<p className="text-sm text-rmdGreen">
								<strong>Check-Out Time:</strong> {property.checkOut}
							</p>
						</li>
					</ul>
				</div>
				<div className="flex flex-col justify-end items-end">
					
						<button className="bg-rmdGreen text-white px-2 py-1 rounded-lg">
							View
						</button>
					
				</div>
			</div>
		</div>
	);
}

export default PropertiesSingleCard;
