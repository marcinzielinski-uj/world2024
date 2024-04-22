var express = require('express');
var router = express.Router();

/* Serwis ogolny: strona glowna, kontakt etc. */

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
