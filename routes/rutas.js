const { Router } = require('express');
const router = Router();
const { getWeather, getAtmosfericas, getTrendingYoutube, getTrendingTikTok } = require('./controlador');

router.get('/getWeather', getWeather);
router.get('/getAtmosfericas', getAtmosfericas);
router.get('/getTrendingYoutube', getTrendingYoutube);
router.get('/getTrendingTikTok', getTrendingTikTok);

module.exports = router;