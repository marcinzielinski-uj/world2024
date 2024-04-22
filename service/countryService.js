/*
    Country Service
 */

const countryModel = require('../dal/countryModel');

const ByCountryCode = async(code) => {
    const country = await countryModel.selectCountryCode(code);
    return country;
}

module.exports = {
    ByCountryCode

}