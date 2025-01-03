const mongoose = require("mongoose");

const ColorGroupSchema = new mongoose.Schema({
  group: {
    type: String,
    required: true,
    unique: true,
  },
  count: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("ColorGroup", ColorGroupSchema);
