// KONFIGURACJA BAZY DANYCH
const dbConnector = require('./dbConnector');

const selectAllCities = async () => {
    const sql = 'SELECT * FROM city';
    const result = await dbConnector.dbQuery(sql);
    return result;
};

const selectCityId = async (cityID) => {
    const sql = `SELECT * FROM city WHERE ID=${cityID}`;
    const result = await dbConnector.dbQuery(sql);
    return result;
}

module.exports = {
    selectAllCities,
    selectCityId
}