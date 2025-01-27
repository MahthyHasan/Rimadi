import express from "express";
import {
  addFloor,
  getFloors,
  getFloorById,
  updateFloor,
  deleteFloor,
} from "../controllers/floor.controller.js";
import { protectedRoute } from "../midlelayers/protectRoute.js";

const router = express.Router();

// Add a new floor
router.post("/add", protectedRoute, addFloor);

// Get all floors
router.get("/", protectedRoute, getFloors);

// Get a floor by ID
router.get("/:id", protectedRoute, getFloorById);

// Update floor details
router.put("/:id", protectedRoute, updateFloor);

// Delete floor
router.delete("/:id", protectedRoute, deleteFloor);

export default router;
