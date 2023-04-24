const express = require('express');
const router = express.Router();
const { Ad } = require('./models/Ad');


router.get('/ads', async (req, res) => {
  try {
    const ads = await Ad.find();
    res.json(ads);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching ads' });
  }
});


router.post('/ads', async (req, res) => {
  const { company, primaryText, headline, description, image, product } = req.body;
  try {
    const newAd = new Ad({
      company,
      primaryText,
      headline,
      description,
      image,
      product,
    });
    await newAd.save();
    res.json(newAd);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating ad' });
  }
});

module.exports = router;
