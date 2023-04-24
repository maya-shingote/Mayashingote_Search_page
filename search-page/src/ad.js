const mongoose = require('mongoose');

const adSchema = new mongoose.Schema({
  company: String,
  primaryText: String,
  headline: String,
  description: String,
  image: String,
  product: {
    name: String,
    type: String,
    price: Number,
  },
});

const Ad = mongoose.model('Ad', adSchema);

const iphone14Ad = new Ad({
  company: 'Apple',
  primaryText: 'Get the new iPhone 14 today!',
  headline: 'Experience the latest in mobile technology',
  description: 'The iPhone 14 features a stunning new design, a powerful A17 chip, and an advanced camera system that takes your photos and videos to the next level.',
  image: 'https://example.com/iphone14.png',
  product: {
    name: 'iPhone 14',
    type: 'Smartphone',
    price: 999,
  },
});

const samsungMobileAd = new Ad({
  company: 'Samsung',
  primaryText: 'Experience the latest Samsung mobile!',
  headline: 'Upgrade your mobile experience with Samsung',
  description: 'The latest Samsung mobile features a sleek design, a powerful processor, and an advanced camera system that captures stunning photos and videos.',
  image: 'https://example.com/samsung.png',
  product: {
    name: 'Samsung Galaxy S22',
    type: 'Smartphone',
    price: 899,
  },
});

const appleWatchAd = new Ad({
  company: 'Apple',
  primaryText: 'Stay connected with the latest Apple Watch!',
  headline: 'Experience the power of a smartwatch',
  description: 'The Apple Watch Series 7 features a larger, more advanced display, faster charging, and new cycling workouts that keep you connected and motivated.',
  image: 'https://example.com/apple-watch.png',
  product: {
    name: 'Apple Watch Series 7',
    type: 'Smartwatch',
    price: 399,
  },
});

const airPodsAd = new Ad({
  company: 'Apple',
  primaryText: 'Experience the freedom of wireless audio!',
  headline: 'Upgrade to the latest AirPods',
  description: 'The AirPods Pro feature active noise cancellation, transparency mode, and a customizable fit for all-day comfort. Plus, with the wireless charging case, you can stay charged on the go.',
  image: 'https://example.com/airpods.png',
  product: {
    name: 'AirPods Pro',
    type: 'Wireless Earbuds',
    price: 249,
  },
});

const samsungSmartTVAd = new Ad({
  company: 'Samsung',
  primaryText: 'Upgrade to the latest Samsung Smart TV!',
  headline: 'Experience the ultimate in home entertainment',
  description: 'The Samsung Smart TV features stunning 4K resolution, smart TV capabilities, and a sleek, modern design that fits perfectly in any home. Watch your favorite movies and TV shows in style.',
  image: 'https://example.com/samsung-tv.png',
  product: {
    name: 'Samsung Smart TV',
    type: 'Television',
    price: 1199,
  },
});

module.exports = {
  Ad,
  iphone14Ad,
  samsungMobileAd,
  appleWatchAd,
  airPodsAd,
  samsungSmartTVAd,
};
