import express from "express";
import {
  addProperty,
  getProperties,
  getPropertyById,
  updateProperty,
  deleteProperty,
} from "../controllers/property.controller.js";
import { protectedRoute } from "../midlelayers/protectRoute.js";

const router = express.Router();

// Add a new property
router.post("/add", protectedRoute, addProperty);

// Get all properties
router.get("/", protectedRoute, getProperties);

// Get a property by ID
router.get("/:id", protectedRoute, getPropertyById);

// Update property details
router.put("/:id", protectedRoute, updateProperty);

// Delete property
router.delete("/:id", protectedRoute, deleteProperty);

export default router;
