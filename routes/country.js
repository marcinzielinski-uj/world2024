var express = require('express');
var router = express.Router();

const countryController = require('../controllers/countryController');

/* Serwis: CITY */

/* GET all country */
router.get('/:code', countryController.getCountryByCode);

module.exports = router;
