import mongoose from "mongoose";

const roomSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: String, // e.g., "Small", "Medium", "Large"
      // required: true,
    },
    width: {
      type: Number, // Room width in meters
      required: true,
    },
    length: {
      type: Number, // Room length in meters
      required: true,
    },
    positionX: {
      type: Number, // x-coordinate of the room in the floor plan
      required: true,
    },
    positionY: {
      type: Number, // y-coordinate of the room in the floor plan
      required: true,
    },
    category: {
      type: String,
      enum: ["AC", "Non-AC"],
      // required: true,
    },
    peopleCapacity: {
      type: Number, // Maximum number of people allowed in the room
      // required: true,
    },
    bedCount: {
      type: Number, // Number of beds in the room
      // required: true,
    },
    accessories: {
      type: [String], // Array of accessories (e.g., "Heater", "Locker", "Attached Bathroom")
    },
    status: {
      type: String,
      enum: ["Checked-in", "Booked", "Available"],
      default: "Available",
    },
    floor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Floor", // Reference to the floor the room belongs to
      required: true,
    },
    property: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Property", // Reference to the property this room belongs to
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the user who created the room
      required: true,
    },
  },
  { timestamps: true }
);

const Room = mongoose.model("Room", roomSchema);

export default Room;
