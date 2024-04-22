/*
    City Service
 */

const cityModel = require('../dal/cityModel');

const AllCities = async () => {
    const city = await cityModel.selectAllCities();
    return city;
};

const ByCityId = async(ID) => {
    const city = await cityModel.selectCityId(ID);
    return city;
}

module.exports = {
    AllCities,
    ByCityId

}