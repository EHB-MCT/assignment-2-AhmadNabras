const express = require("express");
const Palette = require("../models/Palette");
const ColorGroup = require("../models/ColorGroup"); // Ensure the file name matches exactly
const router = express.Router();

// Function to determine the color group
function getColorGroup(color) {
  const colorGroupMap = {
    Red: /^#(FF|F[0-9A-E]|E[0-9A-F])[0-9A-F]{4}$/i,
    Orange: /^#(FF|F[0-9A-E]|E[0-9A-F])[89AB][0-9A-F]{3}$/i,
    Yellow: /^#(FF|F[0-9A-E]|E[0-9A-F])([CD]|[C-F][0-9A-F])[0-9A-F]{2}$/i,
    Green: /^#([3-6][0-9A-F]|00FF)[0-9A-F]{4}$/i,
    Blue: /^#([0-9A-F]{2}[6-9][0-9A-F]|0000FF)[0-9A-F]{2}$/i,
    Purple: /^#(8[0-9A-F]{2}|9[0-9A-F]{2}|800080)[0-9A-F]{2}$/i,
    Pink: /^#(FF[0-9A-F]{2}[A-F][0-9A-F]|FFC0CB)$/i,
    Brown: /^#(8B4513|A52A2A|D2691E|DEB887|F4A460|BC8F8F)$/i,
    Gray: /^#([6-9A-F][0-9A-F]{5}|808080)$/i,
    Black: /^#000000$/i,
    White: /^#FFFFFF$/i,
  };

  return Object.keys(colorGroupMap).find((group) =>
    colorGroupMap[group].test(color)
  );
}

// Route to save a palette and update color groups
router.post("/api/palettes", async (req, res) => {
  try {
    const { colors } = req.body;

    // Save the palette
    await Palette.create({ colors });

    // Update color groups
    for (const color of colors) {
      const group = getColorGroup(color);
      if (group) {
        await ColorGroup.findOneAndUpdate(
          { group },
          { $inc: { count: 1 } },
          { upsert: true, new: true }
        );
      }
    }

    res.status(201).json({ message: "Palette saved and groups updated!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
