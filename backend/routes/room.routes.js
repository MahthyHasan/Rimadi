import express from "express";
import {
  addRoom,
  getRooms,
  getRoomById,
  updateRoom,
  deleteRoom,
} from "../controllers/room.controller.js";
import { protectedRoute } from "../midlelayers/protectRoute.js";

const router = express.Router();

// Add a new room
router.post("/add", protectedRoute, addRoom);

// Get all rooms
router.get("/", protectedRoute, getRooms);

// Get a room by ID
router.get("/:id", protectedRoute, getRoomById);

// Update room details
router.put("/:id", protectedRoute, updateRoom);

// Delete room
router.delete("/:id", protectedRoute, deleteRoom);

export default router;
