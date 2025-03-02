import mongoose from "mongoose";

const floorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true, // e.g., "First Floor", "Second Floor"
    },
    width: {
      type: Number, // Width of the floor in meters
      required: true,
    },
    length: {
      type: Number, // Length of the floor in meters
      required: true,
    },
    property: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Property", // Reference to the property this floor belongs to
      required: true,
    },
    rooms: [ {
      name: String,
      width: Number,
      length: Number,
      positionX: Number,
      positionY: Number
    }],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the user who created the floor
      // required: true,
    },
  },
  { timestamps: true }
);

const Floor = mongoose.model("Floor", floorSchema);

export default Floor;
