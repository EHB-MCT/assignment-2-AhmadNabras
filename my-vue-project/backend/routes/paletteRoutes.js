const express = require("express");
const Palette = require("../models/Palette");
const ColorUsage = require("../models/ColorUsage");
const router = express.Router();

// Get all colors with their usage counts
router.get("/api/colors", async (req, res) => {
  try {
    const colorUsages = await ColorUsage.find();
    res.status(200).json(colorUsages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Save palette and update color usage counts
router.post("/api/palettes", async (req, res) => {
  try {
    const { colors } = req.body;

    console.log(`Received palette colors: ${colors}`);

    // Save palette
    const palette = await Palette.create({ colors });

    // Update color usage counts
    for (const color of colors) {
      const updatedColor = await ColorUsage.findOneAndUpdate(
        { color },
        { $inc: { count: 1 } },
        { upsert: true, new: true }
      );
      console.log(`Updated Color Usage: ${updatedColor}`);
    }

    res.status(201).json({ message: "Palette saved successfully", palette });
  } catch (error) {
    console.error("Error saving palette:", error.message);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
