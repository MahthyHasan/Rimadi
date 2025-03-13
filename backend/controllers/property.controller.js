import Property from "../models/property.model.js";

// Add new property
export const addProperty = async (req, res) => {
  try {
    const { name, rating, floorCount,  checkOut, photos,  checkIn, buildingNo, street, town, latitude, district, postalCode, province, country,  longitude, image, description, amenities, policies } = req.body;

    const newProperty = new Property({
      name,
      latitude,
      longitude,
      image,
      description,
      amenities,
      policies,
      rating, 
      floorCount,
      checkOut,
      photos,
      checkIn,
      buildingNo,
      street,
      town,
      district,
      postalCode,
      province,
      country,
      createdBy: req.user._id,
    });

    const savedProperty = await newProperty.save();
    res.status(201).json(savedProperty);
  } catch (error) {
    console.error(`Error Adding Property: ${error.message}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get all properties
export const getProperties = async (req, res) => {
  try {
    const properties = await Property.find({ createdBy: req.user._id });
    res.status(200).json(properties);
  } catch (error) {
    console.error(`Error Fetching Properties: ${error.message}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get a specific property by ID
export const getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id)
      .populate({
        path: "floors",
        populate: {
          path: "rooms",
        },
      });

    if (!property) {
      return res.status(404).json({ message: "Property Not Found" });
    }

    res.status(200).json(property);
  } catch (error) {
    console.error(`Error Fetching Property: ${error.message}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


// Update property details
export const updateProperty = async (req, res) => {
  try {
    const { name, address, latitude, longitude, image, description, amenities, policies } = req.body;
    
    const updatedProperty = await Property.findByIdAndUpdate(
      req.params.id,
      { name, address, latitude, longitude, image, description, amenities, policies },
      { new: true }
    );

    if (!updatedProperty) {
      return res.status(404).json({ message: "Property Not Found" });
    }

    res.status(200).json(updatedProperty);
  } catch (error) {
    console.error(`Error Updating Property: ${error.message}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete property
export const deleteProperty = async (req, res) => {
  try {
    const deletedProperty = await Property.findByIdAndDelete(req.params.id);

    if (!deletedProperty) {
      return res.status(404).json({ message: "Property Not Found" });
    }

    res.status(200).json({ message: "Property Deleted Successfully" });
  } catch (error) {
    console.error(`Error Deleting Property: ${error.message}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
