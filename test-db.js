const pool = require('./db');

(async () => {
    try {
        const connection = await pool.getConnection();
        console.log("Conexiunea la baza de date a reușit!");
        connection.release();
    } catch (error) {
        console.error("Eroare la conectarea la baza de date:", error.message);
    }
})();
