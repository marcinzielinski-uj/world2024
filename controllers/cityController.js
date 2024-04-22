/*
    City Controller
 */

const cityService = require('../service/cityService');

const getAllCities = async function(req, res) {
    const cities = await cityService.AllCities();
    //res.json(cities);
    res.render('CityIndex', {
        title: 'Miasta Świata',
        cities
    });
};

const getCityById = async (req,res) => {
    const c = await cityService.ByCityId(req.params.id);
    res.json(c);
}

module.exports = {
    getAllCities,
    getCityById
}