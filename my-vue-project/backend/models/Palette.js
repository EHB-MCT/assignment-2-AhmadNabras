const mongoose = require('mongoose');


const PaletteSchema = new mongoose.Schema(
  {
    colors: {
      type: [String], 
      required: true,
    },
  },
  { timestamps: true } 
);

module.exports = mongoose.model('Palette', PaletteSchema);
