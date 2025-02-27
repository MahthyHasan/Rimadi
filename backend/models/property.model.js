import mongoose from "mongoose";

const propertySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      required: true,
      default: "N/A",
    },
    floorCount:{
      type: number,
      required: true,
    },
    checkOut:{
      type: String,
      required: true,
    },
    checkIn:{
      type: String,
      required: true,
    },
    buildingNo:{
      type: String,
      required: true,
    },
    street:{
      type: String,
      required: true,
    },
    town:{
      type: String,
      required: true,
    },
    district:{
      type: String,
      required: true,
    },
    postalCode:{
      type: String,
      required: true,
    },
    province:{
      type: String,
      required: true,
    },
    country:{
      type: String,
      required: true,
    },    
    latitude: {
      type: Number,
      // ToDo
      
    },
    longitude: {
      type: Number,
      // ToDo
    },
    image: {
      type: String, // URL to the image
    },
    description: {
      type: String,
      required: true,
    },
    ratings: {
      type: Number,
      min: 0,
      max: 5,
    },
    availability: {
      type: Boolean,
      default: true,
    },
    amenities: {
      type: [String], // Array of amenities (e.g., "Swimming Pool", "Wi-Fi")
    },
    floors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Floor",
      },
    ],
    rooms: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Room",
      },
    ],
    policies: {
      cancellation: String,
      checkInTime: String,
      checkOutTime: String,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Property = mongoose.model("Property", propertySchema);

export default Property;
