import Floor from "../models/floor.model.js";
import Property from "../models/property.model.js";

// Add a new floor
export const addFloor = async (req, res) => {
  try {
    const { name, width, length, property, rooms } = req.body;

    const newFloor = new Floor({
      name,
      width,
      length,
      property,
      rooms,
      createdBy: req.user._id,
    });

    const savedFloor = await newFloor.save();

    // Update the Property model
    await Property.findByIdAndUpdate(property, { $push: { floors: savedFloor._id } });

    res.status(201).json(savedFloor);
  } catch (error) {
    console.error(`Error Adding Floor: ${error.message}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


export const addMultipleFloors = async (req, res) => {
  const { propertyId, floors, createdBy } = req.body;
  
  try {
      const property = await Property.findById(propertyId);
      if (!property) {
          return res.status(404).json({ message: "Property not found" });
      }

      // Prepare the floor data to be inserted
      const floorDocs = floors.map(floor => ({
          ...floor,
          property: propertyId,  // Ensure property is an ObjectId
          createdBy: createdBy,
      }));

      // Create multiple floors at once
      const createdFloors = await Floor.insertMany(floorDocs);

      // Update the property with the new floor IDs
      property.floors = createdFloors.map(floor => floor._id);
      await property.save();

      res.status(201).json({ message: "Floors added successfully", createdFloors });
  } catch (error) {
      console.error("Failed to add floors", error);
      res.status(500).json({ message: "Server error", error });
  }
};

// Get all floors
export const getFloors = async (req, res) => {
  try {
    const floors = await Floor.find({ createdBy: req.user._id }).populate('property').populate('rooms');
    res.status(200).json(floors);
  } catch (error) {
    console.error(`Error Fetching Floors: ${error.message}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get a specific floor by ID
export const getFloorById = async (req, res) => {
  try {
    const floor = await Floor.findById(req.params.id).populate('property').populate('rooms');
    if (!floor) {
      return res.status(404).json({ message: "Floor Not Found" });
    }
    res.status(200).json(floor);
  } catch (error) {
    console.error(`Error Fetching Floor: ${error.message}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Update floor details
export const updateFloor = async (req, res) => {
  try {
    const { name, width, length, property, rooms } = req.body;

    const updatedFloor = await Floor.findByIdAndUpdate(
      req.params.id,
      { name, width, length, property, rooms },
      { new: true }
    );

    if (!updatedFloor) {
      return res.status(404).json({ message: "Floor Not Found" });
    }

    res.status(200).json(updatedFloor);
  } catch (error) {
    console.error(`Error Updating Floor: ${error.message}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete floor
export const deleteFloor = async (req, res) => {
  try {
    const deletedFloor = await Floor.findByIdAndDelete(req.params.id);

    if (!deletedFloor) {
      return res.status(404).json({ message: "Floor Not Found" });
    }

    res.status(200).json({ message: "Floor Deleted Successfully" });
  } catch (error) {
    console.error(`Error Deleting Floor: ${error.message}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
