import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const AddPropertyMap = ({ onAddressSelect }) => {
	const [position, setPosition] = useState([7.8731, 80.7718]); // Default: Sri Lanka
	const [address, setAddress] = useState("");

	// Fetch address from Nominatim API
	const fetchAddress = async (lat, lon) => {
		try {
			const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
			const data = await response.json();
			if (data.display_name) {
				setAddress(data.display_name);
				onAddressSelect(data.display_name);
			}
		} catch (error) {
			console.error("Error fetching address:", error);
		}
	};

	// Custom component to handle map clicks
	const LocationMarker = () => {
		const map = useMapEvents({
			click(e) {
				const { lat, lng } = e.latlng;
				setPosition([lat, lng]); // Update marker position
				fetchAddress(lat, lng); // Fetch new address
			},
		});
		return position ? (
			<Marker position={position}>
				<Popup>{address || "Fetching address..."}</Popup>
			</Marker>
		) : null;
	};

	return (
		<div className="relative w-full h-96">
			<MapContainer center={position} zoom={7} className="w-full h-full">
				<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
				<LocationMarker />
			</MapContainer>
			{/* Show Address Below Map */}
			{address && <p className="mt-2 text-center text-sm font-semibold">{address}</p>}
		</div>
	);
};

export default AddPropertyMap;