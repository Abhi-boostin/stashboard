import dotenv from "dotenv";
dotenv.config();

import connectDB from "./config/db.js";

connectDB();

import express from "express";
import userRoutes from "./routes/userRoutes.js";
import itemRoutes from "./routes/itemRoutes.js"; // <-- Updated import

const app = express();
app.use(express.json()); // To parse JSON bodies

// User-related routes (register, login, profile)
app.use("/api", userRoutes);

// Item routes (CRUD for inventory/items)
app.use("/api/items", itemRoutes); // <-- Updated prefix

// Home route
app.get("/", (req, res) => {
  res.send("Stashboard backend is running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
