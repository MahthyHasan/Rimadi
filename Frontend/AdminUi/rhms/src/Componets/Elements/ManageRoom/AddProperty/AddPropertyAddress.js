import React, { useState, useEffect } from "react";
import Button from "../../../Atoms/Button";
import TextInputs from "../../../Atoms/TextInputs";

const AddPropertyAdress = () => {
	const [formData, setFormData] = useState({
		address: "",
		town: "",
		district: "",
		postalCode: "",
		province: "",
		country: "",
	});
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
		setFormData({ ...formData, town: value });

		// Debounce API call
		if (typingTimeout) clearTimeout(typingTimeout);
		setTypingTimeout(setTimeout(() => fetchAddressSuggestions(value), 800)); // Wait 800ms after user stops typing
	};

	// Handle address selection and autofill fields
	const handleSelect = (selectedAddress) => {
		setFormData({
			...formData,
			town: selectedAddress.address.city || selectedAddress.address.village || "",
			district: selectedAddress.address.county || selectedAddress.address.state_district || "",
			postalCode: selectedAddress.address.postcode || "",
			province: selectedAddress.address.state || "",
			country: selectedAddress.address.country || "",
		});
		setSuggestions([]); // Clear suggestions after selection
	};

	return (
		<div className="w-full max-w-4xl mx-auto py-2 px-4 bg-white  border-rmdYellow border-4 rounded-2xl shadow-lg md:p-10 lg:p-16 flex flex-col">
			<h1 className="text-2xl text-rmdGreen text-center">Enter Property Address</h1>
			<div className="flex flex-col lg:flex-row justify-between">
				<div>
					<TextInputs type="text" label="No" name="no" placeholder="Enter Number" />
				</div>
				<div>
					<TextInputs type="text" label="Street" name="street" placeholder="Enter Street" />
				</div>
			</div>
			<div className="flex flex-col lg:flex-row justify-between mt-2 relative gap-4">
				<div className="relative">
					<TextInputs
						type="text"
						label="Town"
						name="town"
						placeholder="Town"
						value={formData.village}
						onChange={handleAddressChange}
					/>
					{/* Dropdown for address suggestions (absolute positioning to prevent layout shift) */}
					{suggestions.length > 0 && (
						<ul className="absolute left-0 w-full bg-white text-black mt-1 rounded shadow-lg max-h-48 overflow-auto z-50 border border-gray-300">
							{suggestions.map((suggestion) => (
								<li
									key={suggestion.place_id}
									className="p-2 hover:bg-gray-200 cursor-pointer"
									onClick={() => handleSelect(suggestion)}>
									{formatAddress(suggestion)}
								</li>
							))}
						</ul>
					)}
				</div>
				<div>
					<TextInputs type="text" label="District" name="district" placeholder="District" value={formData.district} />
				</div>
				<div>
					<TextInputs type="number" label="Postal Code" name="postalCode" placeholder="Postal Code" value={formData.postalCode} />
				</div>
			</div>
			<div className="flex flex-col lg:flex-row justify-between mt-2">
				<div>
					<TextInputs type="text" label="Province" name="province" placeholder="Province" value={formData.province} />
				</div>
				<div>
					<TextInputs type="text" label="Country" name="country" placeholder="Country" value={formData.country} />
				</div>
			</div>
			<Button className="mt-4" variant="primary">
				Add
			</Button>
		</div>
	);
};

export default AddPropertyAdress;
