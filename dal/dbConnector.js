// KONFIGURACJA BAZY DANYCH
const mysql = require("mysql2/promise");
const pool = mysql.createPool({
    // Ustawienia DB w pliku .env
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

/* Uniwersalna funkcja ORM */
const dbQuery = async (query) => {
    let r = {};
    try {
        const [rows] = await pool.query(query);
        r = rows
    } catch (err) {
        console.error(err)
    }
    return r;
}

module.exports = { dbQuery }