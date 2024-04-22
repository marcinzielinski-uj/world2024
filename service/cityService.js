/*
    City service
 */

const cityModel = require('../dal/cityModel');

const AllCities = async () => {
    const city = await cityModel.selectAllCities();
    return city;
    //const t = { title: 'City xxx test test tes ' };
    //return t;

};


module.exports = {
    AllCities
}