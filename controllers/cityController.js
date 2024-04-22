/*
    City Controler
 */

const cityService = require('../service/cityService');

const getAllCities = async function(req, res) {
    const ts = await cityService.AllCities();
    res.json(ts);
    //res.render('index', { title: 'city' });
};

module.exports = {
    getAllCities
}