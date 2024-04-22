/*
    Country Controller
 */

const countryService = require('../service/countryService');

const getCountryByCode = async (req,res) => {
    const country = await countryService.ByCountryCode(req.params.code);
    res.json(country);
}

module.exports = {
    getCountryByCode
}