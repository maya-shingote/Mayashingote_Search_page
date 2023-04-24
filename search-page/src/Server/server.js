
const router = express.Router();
const db = require('./db');
const MongoClient = require('mongodb').MongoClient;
const uri = '<your_mongodb_atlas_uri>';
const express = require('express');
const app = express();


router.get('/ads', async (req, res) => {
  const { keyword } = req.query;
  try {
    const ads = await db.findAds(keyword);
    res.json(ads);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
