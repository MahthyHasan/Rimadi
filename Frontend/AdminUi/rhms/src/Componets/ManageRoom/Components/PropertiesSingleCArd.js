import React from "react";
import { Link } from "react-router-dom";

function PropertiesSingleCard({ property }) {
	const { name, address, description, image, checkIn, checkOut, availability } =
		property;

	return (
		<div className="bg-rmdYellow/30 shadow-lg rounded-lg p-4 mt-2 w-full flex flex-col md:flex-row gap-2">
			<div className="md:w-1/4 flex justify-center items-top">
				<img
					src={image}
					alt={name}
					className="rounded-full w-[4rem] h-[4rem] object-cover"
				/>
			</div>
			<div className="md:w-3/4 flex flex-col justify-between">
				<div>
					<h2 className="text-lg font-bold text-rmdGreen truncate">{name}</h2>
					<p className="text-sm text-rmdGreen mt-[-10px] truncate">{address}</p>
					<p className="text-sm text-rmdGreen mt-[-20px]">
						{availability ? (
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
								<strong>Check-In Time:</strong> {checkIn}
							</p>
						</li>
						<li>
							<p className="text-sm text-rmdGreen">
								<strong>Check-Out Time:</strong> {checkOut}
							</p>
						</li>
					</ul>
				</div>
				<div className="flex flex-col justify-end items-end">
					<Link to="/manageR/viewProperty">
						<button className="bg-rmdGreen text-white px-2 py-1 rounded-lg">
							View
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default PropertiesSingleCard;
