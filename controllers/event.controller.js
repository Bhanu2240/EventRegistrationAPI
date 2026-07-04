import Event from "../models/Event.js";

// Create a new event
export const createEvent = async (req, res) => {
  try {
    const { title, date, location } = req.body;

    if (!title || !date || !location) {
      return res.status(400).json({
        success: false,
        message: "Title, date, and location are required.",
      });
    }

    const event = await Event.create({
      title,
      date,
      location,
    });

    res.status(201).json({
      success: true,
      message: "Event created successfully.",
      data: event,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get all events (with optional filters)
export const getEvents = async (req, res) => {
  try {
    const { location, date } = req.query;

    const filter = {};

    if (location) {
      filter.location = location;
    }

    if (date) {
      const start = new Date(date);
      const end = new Date(date);
      end.setDate(end.getDate() + 1);

      filter.date = {
        $gte: start,
        $lt: end,
      };
    }

    const events = await Event.find(filter);

    res.status(200).json({
      success: true,
      count: events.length,
      data: events,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Register a user for an event
export const registerUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found.",
      });
    }

    const alreadyRegistered = event.registrations.some(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );

    if (alreadyRegistered) {
      return res.status(400).json({
        success: false,
        message: "User already registered for this event.",
      });
    }

    event.registrations.push({
      name,
      email,
    });

    await event.save();

    res.status(200).json({
      success: true,
      message: "Registration successful.",
      data: event.registrations,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get all registrations for an event
export const getRegistrations = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found.",
      });
    }

    res.status(200).json({
      success: true,
      count: event.registrations.length,
      data: event.registrations,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};