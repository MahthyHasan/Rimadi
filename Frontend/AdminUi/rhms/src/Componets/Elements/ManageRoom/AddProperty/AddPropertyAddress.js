import React, { useState, useEffect } from "react";
import Button from "../../../Atoms/Button";
import TextInputs from "../../../Atoms/TextInputs";
import { usePropertyStore } from "../../../../Store/property-store";

const AddPropertyAdress = () => {
	const { property, setPropertyField } = usePropertyStore();
	const [suggestions, setSuggestions] = useState([]);
	const [typingTimeout, setTypingTimeout] = useState(null);

	// Fetch address suggestions after user stops typing
	const fetchAddressSuggestions = async (query) => {
		if (!query) {
			setSuggestions([]);
			return;
		}
		const url = `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&q=${query}`;
		try {
			const response = await fetch(url);
			const data = await response.json();
			setSuggestions(data);
		} catch (error) {
			console.error("Error fetching address suggestions:", error);
		}
	};

	// Format address for display
	const formatAddress = (address) => {
		const town = address.address.village || address.address.city || "";
		const district = address.address.county || address.address.state_district || "";
		const province = address.address.state || "";
		const postalCode = address.address.postcode || "";
		const country = address.address.country || "";

		return `${town}, ${district}, ${province}, ${postalCode}, ${country}`;
	};

	// Handle user input with debounce effect
	const handleAddressChange = (e) => {
		const value = e.target.value;
		setPropertyField("town", value); // Update store

		// Debounce API call
		if (typingTimeout) clearTimeout(typingTimeout);
		setTypingTimeout(setTimeout(() => fetchAddressSuggestions(value), 800));
	};

	// Handle address selection and autofill fields
	const handleSelect = (selectedAddress) => {
		setPropertyField("town", selectedAddress.address.city || selectedAddress.address.village || "");
		setPropertyField("district", selectedAddress.address.county || selectedAddress.address.state_district || "");
		setPropertyField("postalCode", selectedAddress.address.postcode || "");
		setPropertyField("province", selectedAddress.address.state || "");
		setPropertyField("country", selectedAddress.address.country || "");

		setSuggestions([]); // Clear suggestions
	};

	return (
		<div className="w-full max-w-4xl mx-auto py-2 px-4 bg-white border-rmdYellow border-4 rounded-2xl shadow-lg md:p-10 lg:p-16 flex flex-col">
			<h1 className="text-2xl text-rmdGreen text-center">Enter Property Address</h1>
			<div className="flex flex-col lg:flex-row justify-between">
				<div>
					<TextInputs
						type="text"
						label="No"
						name="buildingNo"
						placeholder="Enter Number"
						value={property.buildingNo}
						onChange={(e) => setPropertyField("buildingNo", e.target.value)}
					/>
				</div>
				<div>
					<TextInputs
						type="text"
						label="Street"
						name="street"
						placeholder="Enter Street"
						value={property.street}
						onChange={(e) => setPropertyField("street", e.target.value)}
					/>
				</div>
			</div>
			<div className="flex flex-col lg:flex-row justify-between mt-2 relative gap-4">
				<div className="relative">
					<TextInputs
						type="text"
						label="Town"
						name="town"
						placeholder="Town"
						value={property.town}
						onChange={handleAddressChange}
					/>
					{/* Dropdown for address suggestions */}
					{suggestions.length > 0 && (
						<ul className="absolute left-0 w-full bg-white text-black mt-1 rounded shadow-lg max-h-48 overflow-auto z-50 border border-gray-300">
							{suggestions.map((suggestion) => (
								<li
									key={suggestion.place_id}
									className="p-2 hover:bg-gray-200 cursor-pointer"
									onClick={() => handleSelect(suggestion)}
								>
									{formatAddress(suggestion)}
								</li>
							))}
						</ul>
					)}
				</div>
				<div>
					<TextInputs
						type="text"
						label="District"
						name="district"
						placeholder="District"
						value={property.district}
						onChange={(e) => setPropertyField("district", e.target.value)}
					/>
				</div>
				<div>
					<TextInputs
						type="number"
						label="Postal Code"
						name="postalCode"
						placeholder="Postal Code"
						value={property.postalCode}
						onChange={(e) => setPropertyField("postalCode", e.target.value)}
					/>
				</div>
			</div>
			<div className="flex flex-col lg:flex-row justify-between mt-2">
				<div>
					<TextInputs
						type="text"
						label="Province"
						name="province"
						placeholder="Province"
						value={property.province}
						onChange={(e) => setPropertyField("province", e.target.value)}
					/>
				</div>
				<div>
					<TextInputs
						type="text"
						label="Country"
						name="country"
						placeholder="Country"
						value={property.country}
						onChange={(e) => setPropertyField("country", e.target.value)}
					/>
				</div>
			</div>
		</div>
	);
};

export default AddPropertyAdress;
