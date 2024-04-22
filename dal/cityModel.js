// KONFIGURACJA BAZY DANYCH
const mysql = require("mysql2/promise");
const pool = mysql.createPool({
    // Ustawienia DB w pliku .env
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: 8889
});

const selectAllCities = async () => {
    const sql = 'SELECT * FROM city';
    let r = {};
    try {
        const [rows] = await pool.query(sql);
        r = rows
    } catch (err) {
        console.error(err)
    }
    return r;
};

module.exports = {
    selectAllCities
}