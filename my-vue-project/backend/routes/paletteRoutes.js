const express = require("express");
const ColorGroup = require("../models/ColorGroup"); // Zorg dat het model correct is

const router = express.Router();

// Endpoint om colorgroups op te halen
router.get("/api/colorgroups", async (req, res) => {
  try {
    const colorGroups = await ColorGroup.find(); // Haal alle kleurengroepen op
    res.status(200).json(colorGroups);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
