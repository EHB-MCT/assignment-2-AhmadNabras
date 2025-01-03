const mongoose = require("mongoose");

const ColorUsageSchema = new mongoose.Schema({
  color: { type: String, required: true, unique: true }, // Hex color code
  count: { type: Number, default: 0 }, // Usage count
});

module.exports = mongoose.model("ColorUsage", ColorUsageSchema);
