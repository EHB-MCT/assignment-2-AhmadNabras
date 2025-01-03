const mongoose = require("mongoose");

const colorGroupSchema = new mongoose.Schema({
  group: { type: String, required: true, unique: true },
  count: { type: Number, default: 0 },
});

module.exports = mongoose.model("ColorGroup", colorGroupSchema);
