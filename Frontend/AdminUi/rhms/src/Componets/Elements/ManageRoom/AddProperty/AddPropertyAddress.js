import React, { useState } from "react";
import Button from "../../../Atoms/Button";
import TextInputs from "../../../Atoms/TextInputs";
import { usePropertyStore } from "../../../../Store/property-store";

const AddPropertyAdress = () => {
    const { property, setPropertyField } = usePropertyStore();
    const [suggestions, setSuggestions] = useState([]);
    const [typingTimeout, setTypingTimeout] = useState(null);

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

    const formatAddress = (address) => {
        const town = address.address.village || address.address.city || "";
        const district = address.address.county || address.address.state_district || "";
        const province = address.address.state || "";
        const postalCode = address.address.postcode || "";
        const country = address.address.country || "";

        return `${town}, ${district}, ${province}, ${postalCode}, ${country}`;
    };

    const handleAddressChange = (e) => {
        const value = e.target.value;
        setPropertyField("town", value);

        if (typingTimeout) clearTimeout(typingTimeout);
        setTypingTimeout(setTimeout(() => fetchAddressSuggestions(value), 800));
    };

    const handleSelect = (selectedAddress) => {
        setPropertyField({
            town: selectedAddress.address.city || selectedAddress.address.village || "",
            district: selectedAddress.address.county || selectedAddress.address.state_district || "",
            postalCode: selectedAddress.address.postcode || "",
            province: selectedAddress.address.state || "",
            country: selectedAddress.address.country || ""
        });

        setSuggestions([]);
    };

    return (
        <div className="w-full max-w-4xl mx-auto py-2 px-4 bg-white border-rmdYellow border-4 rounded-2xl shadow-lg md:p-10 lg:p-16 flex flex-col">
            <h1 className="text-2xl text-rmdGreen text-center">Enter Property Address</h1>
            <div className="flex flex-col lg:flex-row justify-between">
                <TextInputs
                    type="text"
                    label="No"
                    value={property.buildingNo}
                    onChange={(e) => setPropertyField({buildingNo: e.target.value})}
                />
                <TextInputs
                    type="text"
                    label="Street"
                    value={property.street}
                    onChange={(e) => setPropertyField("street", e.target.value)}
                />
            </div>
            <div className="flex flex-col lg:flex-row justify-between mt-2 gap-4">
                <div className="relative">
                    <TextInputs
                        type="text"
                        label="Town"
                        value={property.town}
                        onChange={handleAddressChange}
                    />
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
                <TextInputs
                    type="text"
                    label="District"
                    value={property.district}
                    onChange={(e) => setPropertyField("district", e.target.value)}
                />
                <TextInputs
                    type="number"
                    label="Postal Code"
                    value={property.postalCode}
                    onChange={(e) => setPropertyField("postalCode", e.target.value)}
                />
            </div>
            <div className="flex flex-col lg:flex-row justify-between mt-2">
                <TextInputs
                    type="text"
                    label="Province"
                    value={property.province}
                    onChange={(e) => setPropertyField("province", e.target.value)}
                />
                <TextInputs
                    type="text"
                    label="Country"
                    value={property.country}
                    onChange={(e) => setPropertyField("country", e.target.value)}
                />
            </div>
        </div>
    );
};

export default AddPropertyAdress;
