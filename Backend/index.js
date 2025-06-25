import dotenv from "dotenv";
dotenv.config();

import connectDB from "./config/db.js";

connectDB();

import express from "express";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(express.json()); // To parse JSON bodies
app.use("/api", userRoutes);

app.get("/", (req, res) => {
  res.send("Stashboard backend is running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
