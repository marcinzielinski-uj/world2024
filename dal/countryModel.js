// KONFIGURACJA BAZY DANYCH
const dbConnector = require('./dbConnector');

const selectCountryCode = async (countryCode) => {
    const sql = `SELECT * FROM country WHERE Code='${countryCode}'`;
    const result = await dbConnector.dbQuery(sql);
    return result;
}

module.exports = {
  selectCountryCode
}