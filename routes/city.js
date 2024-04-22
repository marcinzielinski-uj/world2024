var express = require('express');
var router = express.Router();

const cityContoller = require('../controllers/cityController');

/* Serwis: CITY */

/* GET all cities */
router.get('/', cityContoller.getAllCities);
router.get('/:id', cityContoller.getCityById);

// dodaj miasto
// [POST] /world/city
// usun miasto
// [DELETE] /world/city/:ID (sprawdzic czy istniej)
// zauktualizuj miasto
// [PUT] /world/city/:ID (sprawdzic czy istniej)
// [GET] /world/city/:ID /population


module.exports = router;
