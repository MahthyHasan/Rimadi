import React, { useState } from "react";
import { Modal, Button, Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./mrPage.css";
import Layout from "../../../Layout/Layout";

const PropertyManagement = () => {
	const [property, setProperty] = useState({
		name: "",
		address: "",
		image: "",
		description: "",
		amenities: [],
		cancellation: "",
		checkInTime: "",
		checkOutTime: "",
	});

	const [floors, setFloors] = useState([]);
	const [rooms, setRooms] = useState({});
	const [amenity, setAmenity] = useState("");
	const [floorModal, setFloorModal] = useState(false);
	const [roomModal, setRoomModal] = useState(false);
	const [currentFloor, setCurrentFloor] = useState(null);
	const [newFloor, setNewFloor] = useState({ name: "", width: "", length: "" });
	const [newRoom, setNewRoom] = useState({
		name: "",
		size: "",
		width: "",
		length: "",
		xPosition: "",
		yPosition: "",
		category: "",
		peopleCapacity: "",
		bedCount: "",
		accessories: [],
	});
	const [accessory, setAccessory] = useState("");

	const addAmenity = () => {
		setProperty((prev) => ({
			...prev,
			amenities: [...prev.amenities, amenity],
		}));
		setAmenity("");
	};

	const addFloor = () => {
		setFloors([...floors, { ...newFloor, rooms: [] }]);
		setNewFloor({ name: "", width: "", length: "" });
		setFloorModal(false);
	};

	const addRoom = () => {
		const updatedFloors = floors.map((floor) => {
			if (floor.name === currentFloor) {
				return { ...floor, rooms: [...floor.rooms, newRoom] };
			}
			return floor;
		});
		setFloors(updatedFloors);
		setNewRoom({
			name: "",
			size: "",
			width: "",
			length: "",
			xPosition: "",
			yPosition: "",
			category: "",
			peopleCapacity: "",
			bedCount: "",
			accessories: [],
		});
		setRoomModal(false);
	};

	const addAccessory = () => {
		setNewRoom((prev) => ({
			...prev,
			accessories: [...prev.accessories, accessory],
		}));
		setAccessory("");
	};

	return (
		<Layout>
			<div className="flex">
				{/* Left Panel: Form and Accordion */}
				<div className="w-1/3 p-4 border-r">
					<h2 className="text-xl font-bold mb-4">Add Property</h2>
					<div className="mb-4">
						<input
							type="text"
							placeholder="Name"
							value={property.name}
							onChange={(e) =>
								setProperty({ ...property, name: e.target.value })
							}
							className="w-full p-2 border rounded mb-2 border-rmdYellow text-rmdGreen"
						/>
						<input
							type="text"
							placeholder="Address"
							value={property.address}
							onChange={(e) =>
								setProperty({ ...property, address: e.target.value })
							}
							className="w-full p-2 border rounded mb-2 border-rmdYellow text-rmdGreen"
						/>
						<input
							type="file"
							onChange={(e) =>
								setProperty({ ...property, image: e.target.files[0] })
							}
							className="w-full p-2 border rounded mb-2 border-rmdYellow text-rmdGreen"
						/>
						<textarea
							placeholder="Description"
							value={property.description}
							onChange={(e) =>
								setProperty({ ...property, description: e.target.value })
							}
							className="w-full p-2 border rounded mb-2 border-rmdYellow text-rmdGreen"></textarea>
						<div className="mb-2">
							<input
								type="text"
								placeholder="Amenity"
								value={amenity}
								onChange={(e) => setAmenity(e.target.value)}
								className="w-3/4 p-2 border rounded border-rmdYellow text-rmdGreen"
							/>
							<button
								onClick={addAmenity}
								className="ml-2 bg-rmdGreen text-rmdYellow px-4 py-2 rounded">
								Add
							</button>
						</div>
						<input
							type="text"
							placeholder="Cancellation Policy"
							value={property.cancellation}
							onChange={(e) =>
								setProperty({ ...property, cancellation: e.target.value })
							}
							className="w-full p-2 border rounded mb-2 border-rmdYellow text-rmdGreen"
						/>
						<input
							type="time"
							placeholder="Check-In Time"
							value={property.checkInTime}
							onChange={(e) =>
								setProperty({ ...property, checkInTime: e.target.value })
							}
							className="w-full p-2 border rounded mb-2 border-rmdYellow text-rmdGreen"
						/>
						<input
							type="time"
							placeholder="Check-Out Time"
							value={property.checkOutTime}
							onChange={(e) =>
								setProperty({ ...property, checkOutTime: e.target.value })
							}
							className="w-full p-2 border rounded mb-4 border-rmdYellow text-rmdGreen"
						/>
						<button className="w-full bg-rmdGreen text-rmdYellow px-4 py-2 rounded">
							Add Property
						</button>
					</div>

					<h2 className="text-xl font-bold mb-4">Floors</h2>
					<button
						onClick={() => setFloorModal(true)}
						className="bg-rmdGreen text-rmdYellow px-4 py-2 rounded mb-4">
						Add Floor
					</button>
					<Accordion>
						{floors.map((floor, index) => (
							<Accordion.Item eventKey={index} key={index}>
								<Accordion.Header>{floor.name}</Accordion.Header>
								<Accordion.Body>
									<button
										onClick={() => {
											setCurrentFloor(floor.name);
											setRoomModal(true);
										}}
										className="bg-rmdGreen text-rmdYellow px-4 py-2 rounded mb-2">
										Add Room
									</button>
									<ul>
										{floor.rooms.map((room, idx) => (
											<li key={idx}>{room.name}</li>
										))}
									</ul>
								</Accordion.Body>
							</Accordion.Item>
						))}
					</Accordion>
				</div>

				{/* Right Panel: Room Diagram */}
				{/* <div className="w-2/3 p-4">
        <h2 className="text-xl font-bold mb-4">Room Diagram</h2>
        <div className="border h-96 flex items-center justify-center">Select a floor to display rooms</div>
      </div> */}

				{/* Floor Modal */}
				<Modal
					style={{ opacity: floorModal ? 1 : 0 }}
					show={floorModal}
					onHide={() => setFloorModal(false)}>
					<Modal.Header closeButton>
						<Modal.Title>Add Floor</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<input
							type="text"
							placeholder="Name"
							value={newFloor.name}
							onChange={(e) =>
								setNewFloor({ ...newFloor, name: e.target.value })
							}
							className="w-full p-2 border rounded mb-2 border-rmdYellow text-rmdGreen"
						/>
						<input
							type="number"
							placeholder="Width"
							value={newFloor.width}
							onChange={(e) =>
								setNewFloor({ ...newFloor, width: e.target.value })
							}
							className="w-full p-2 border rounded mb-2 border-rmdYellow text-rmdGreen"
						/>
						<input
							type="number"
							placeholder="Length"
							value={newFloor.length}
							onChange={(e) =>
								setNewFloor({ ...newFloor, length: e.target.value })
							}
							className="w-full p-2 border rounded mb-2 border-rmdYellow text-rmdGreen"
						/>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={() => setFloorModal(false)}>
							Close
						</Button>
						<Button variant="primary" onClick={addFloor}>
							Add Floor
						</Button>
					</Modal.Footer>
				</Modal>
				{/* Room Modal */}
				<Modal
					style={{ opacity: roomModal ? 1 : 0 }}
					show={roomModal}
					onHide={() => setRoomModal(false)}>
					<Modal.Header closeButton>
						<Modal.Title>Add Room</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<input
							type="text"
							placeholder="Name"
							value={newRoom.name}
							onChange={(e) => setNewRoom({ ...newRoom, name: e.target.value })}
							className="w-full p-2 border rounded mb-2 border-rmdYellow text-rmdGreen"
						/>
						<input
							type="text"
							placeholder="Size"
							value={newRoom.size}
							onChange={(e) => setNewRoom({ ...newRoom, size: e.target.value })}
							className="w-full p-2 border rounded mb-2 border-rmdYellow text-rmdGreen"
						/>
						<input
							type="number"
							placeholder="Width"
							value={newRoom.width}
							onChange={(e) =>
								setNewRoom({ ...newRoom, width: e.target.value })
							}
							className="w-full p-2 border rounded mb-2 border-rmdYellow text-rmdGreen"
						/>
						<input
							type="number"
							placeholder="Length"
							value={newRoom.length}
							onChange={(e) =>
								setNewRoom({ ...newRoom, length: e.target.value })
							}
							className="w-full p-2 border rounded mb-2 border-rmdYellow text-rmdGreen"
						/>
						<input
							type="number"
							placeholder="X Position"
							value={newRoom.xPosition}
							onChange={(e) =>
								setNewRoom({ ...newRoom, xPosition: e.target.value })
							}
							className="w-full p-2 border rounded mb-2 border-rmdYellow text-rmdGreen"
						/>
						<input
							type="number"
							placeholder="Y Position"
							value={newRoom.yPosition}
							onChange={(e) =>
								setNewRoom({ ...newRoom, yPosition: e.target.value })
							}
							className="w-full p-2 border rounded mb-2 border-rmdYellow text-rmdGreen"
						/>
						<input
							type="text"
							placeholder="Category"
							value={newRoom.category}
							onChange={(e) =>
								setNewRoom({ ...newRoom, category: e.target.value })
							}
							className="w-full p-2 border rounded mb-2 border-rmdYellow text-rmdGreen"
						/>
						<input
							type="number"
							placeholder="People Capacity"
							value={newRoom.peopleCapacity}
							onChange={(e) =>
								setNewRoom({ ...newRoom, peopleCapacity: e.target.value })
							}
							className="w-full p-2 border rounded mb-2 border-rmdYellow text-rmdGreen"
						/>
						<input
							type="number"
							placeholder="Bed Count"
							value={newRoom.bedCount}
							onChange={(e) =>
								setNewRoom({ ...newRoom, bedCount: e.target.value })
							}
							className="w-full p-2 border rounded mb-2 border-rmdYellow text-rmdGreen"
						/>
						<div className="mb-2">
							<input
								type="text"
								placeholder="Accessory"
								value={accessory}
								onChange={(e) => setAccessory(e.target.value)}
								className="w-3/4 p-2 border rounded border-rmdYellow text-rmdGreen"
							/>
							<button
								onClick={addAccessory}
								className="ml-2 bg-rmdGreen text-rmdYellow px-4 py-2 rounded">
								Add
							</button>
						</div>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={() => setRoomModal(false)}>
							Close
						</Button>
						<Button variant="primary" onClick={addRoom}>
							Add Room
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		</Layout>
	);
};

export default PropertyManagement;
