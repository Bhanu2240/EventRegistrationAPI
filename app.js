import express from "express";
import cors from "cors";
import eventRoutes from "./routes/event.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Event Registration API is Running 🚀",
  });
});

app.use("/events", eventRoutes);

export default app;