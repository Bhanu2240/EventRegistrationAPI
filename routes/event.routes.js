import express from "express";
import {
  createEvent,
  getEvents,
  registerUser,
  getRegistrations,
} from "../controllers/event.controller.js";

const router = express.Router();

// Create a new event
router.post("/", createEvent);

// Get all events
router.get("/", getEvents);

// Register a user for an event
router.post("/:id/register", registerUser);

// Get all registrations for an event
router.get("/:id/registrations", getRegistrations);

export default router;