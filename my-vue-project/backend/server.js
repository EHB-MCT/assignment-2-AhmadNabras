const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

// Debugging: Check if JWT_SECRET is loaded
console.log("JWT_SECRET:", process.env.JWT_SECRET);

const app = express();
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require("./routes/authRoutes");
const paletteRoutes = require("./routes/paletteRoutes");

app.use("/api/auth", authRoutes);
app.use("/", paletteRoutes);

// Database connection and server start
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  });
