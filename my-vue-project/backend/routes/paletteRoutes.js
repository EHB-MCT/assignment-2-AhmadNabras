const express = require('express');
const Palette = require('../models/Palette');
const router = express.Router();

// Functie om kleurengroepen te bepalen
function determineColorGroup(color) {
  const colorGroups = {
    blauw: ['#0000FF', '#ADD8E6', '#00008B'],
    rood: ['#FF0000', '#DC143C', '#8B0000'],
    groen: ['#008000', '#ADFF2F', '#006400'],
    geel: ['#FFFF00', '#FFD700', '#FFEA00'],
    // Voeg meer kleurengroepen toe
  };

  for (const group in colorGroups) {
    if (colorGroups[group].includes(color.toUpperCase())) {
      return group;
    }
  }
  return 'onbekend'; // Als geen match
}

// Route voor het maken van een palet
router.post('/api/palettes', async (req, res) => {
  try {
    const colorGroups = req.body.colors.map(color => ({
      color,
      group: determineColorGroup(color),
    }));

    const palette = await Palette.create({ colors: colorGroups });
    res.status(201).json(palette);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route voor het ophalen van kleurstatistieken per week
router.get('/api/stats', async (req, res) => {
  try {
    const stats = await Palette.aggregate([
      { $unwind: '$colors' },
      {
        $group: {
          _id: {
            group: '$colors.group',
            week: { $isoWeek: '$createdAt' },
          },
          count: { $sum: 1 },
        },
      },
      { $sort: { '_id.week': 1, '_id.group': 1 } },
    ]);

    res.status(200).json(stats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.delete('/api/palettes/empty', async (req, res) => {
  try {
    await Palette.deleteMany({ colors: { $size: 0 } });
    res.status(200).json({ message: "Empty palettes removed successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
