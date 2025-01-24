import express from "express";
import {
  addAccountEntry,
  getAccountEntries,
  getAccountEntryById,
  updateAccountEntry,
  deleteAccountEntry,
} from "../controllers/account.controller.js";
import { protectedRoute } from "../midlelayers/protectRoute.js";

const router = express.Router();

// Add a new account entry
router.post("/add", protectedRoute, addAccountEntry);

// Get all account entries
router.get("/", protectedRoute, getAccountEntries);

// Get an account entry by ID
router.get("/:id", protectedRoute, getAccountEntryById);

// Update an account entry
router.put("/:id", protectedRoute, updateAccountEntry);

// Delete an account entry
router.delete("/:id", protectedRoute, deleteAccountEntry);

export default router;
