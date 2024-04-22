var express = require('express');
var router = express.Router();

const cityContoller = require('../controllers/cityController');

/* Serwis: CITY */

/* GET all cities */
router.get('/', cityContoller.getAllCities);

module.exports = router;
