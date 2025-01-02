const express = require('express');
const Palette = require('../models/Palette'); 
const router = express.Router();


router.post('/api/palettes', async (req, res) => {
  try {
    const palette = await Palette.create({ colors: req.body.colors });
    res.status(201).json(palette);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.get('/api/palettes', async (req, res) => {
  try {
    const palettes = await Palette.find({ colors: { $ne: [] } }); 
    res.status(200).json(palettes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
