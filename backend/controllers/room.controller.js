import Room from "../models/room.model.js";
import Property from "../models/property.model.js";
import Floor from "../models/floor.model.js";

// Add a new room
export const addRoom = async (req, res) => {
	try {
		const {
			name,
			size,
			width,
			length,
			positionX,
			positionY,
			category,
			peopleCapacity,
			bedCount,
			accessories,
			floor,
			property,
		} = req.body;

		const newRoom = new Room({
			name,
			size,
			width,
			length,
			positionX,
			positionY,
			category,
			peopleCapacity,
			bedCount,
			accessories,
			floor,
			property,
			createdBy: req.user._id,
		});

		const savedRoom = await newRoom.save();

		// Update the Property model
		await Property.findByIdAndUpdate(property, {
			$push: { rooms: savedRoom._id },
		});

		// Update the Floor model
		await Floor.findByIdAndUpdate(floor, { $push: { rooms: savedRoom._id } });

		res.status(201).json(savedRoom);
	} catch (error) {
		console.error(`Error Adding Room: ${error.message}`);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

// Get all rooms
export const getRooms = async (req, res) => {
	try {
		const rooms = await Room.find({ createdBy: req.user._id })
			.populate("floor")
			.populate("property");
		res.status(200).json(rooms);
	} catch (error) {
		console.error(`Error Fetching Rooms: ${error.message}`);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

// Get a specific room by ID
export const getRoomById = async (req, res) => {
	try {
		const room = await Room.findById(req.params.id)
			.populate("floor")
			.populate("property");
		if (!room) {
			return res.status(404).json({ message: "Room Not Found" });
		}
		res.status(200).json(room);
	} catch (error) {
		console.error(`Error Fetching Room: ${error.message}`);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

// Update room details
export const updateRoom = async (req, res) => {
	try {
		const {
			name,
			size,
			width,
			length,
			positionX,
			positionY,
			category,
			peopleCapacity,
			bedCount,
			accessories,
			status,
			floor,
			property,
		} = req.body;

		const updatedRoom = await Room.findByIdAndUpdate(
			req.params.id,
			{
				name,
				size,
				width,
				length,
				positionX,
				positionY,
				category,
				peopleCapacity,
				bedCount,
				accessories,
				status,
				floor,
				property,
			},
			{ new: true }
		);

		if (!updatedRoom) {
			return res.status(404).json({ message: "Room Not Found" });
		}

		res.status(200).json(updatedRoom);
	} catch (error) {
		console.error(`Error Updating Room: ${error.message}`);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

// Delete room
export const deleteRoom = async (req, res) => {
	try {
		const deletedRoom = await Room.findByIdAndDelete(req.params.id);

		if (!deletedRoom) {
			return res.status(404).json({ message: "Room Not Found" });
		}

		res.status(200).json({ message: "Room Deleted Successfully" });
	} catch (error) {
		console.error(`Error Deleting Room: ${error.message}`);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

// Add Multiple Rooms sametime
export const addMultipleRooms = async (req, res) => {
	try {
		const { rooms, floorId, propertyId } = req.body;

		if (!rooms || !floorId || !propertyId) {
			return res.status(400).json({ message: "Missing required data." });
		}

		const createdRooms = [];

		for (const room of rooms) {
			const newRoom = new Room({
				...room,
				floor: floorId,
				property: propertyId,
				createdBy: req.user._id,
			});
			const savedRoom = await newRoom.save();

			// Push room to property & floor
			await Floor.findByIdAndUpdate(floorId, {
				$push: { rooms: savedRoom._id },
			});
			await Property.findByIdAndUpdate(propertyId, {
				$push: { rooms: savedRoom._id },
			});

			createdRooms.push(savedRoom);
		}

		res.status(201).json(createdRooms);
	} catch (error) {
		console.error(`Error Adding Rooms: ${error.message}`);
		res.status(500).json({ message: "Internal Server Error" });
	}
};
