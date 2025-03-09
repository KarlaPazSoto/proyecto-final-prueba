const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: false  // Esto permite conexiones SSL/TLS sin verificar el certificado
  }
});

pool.connect()
  .then(() => console.log("🟢 Conectado a PostgreSQL (datatradz)"))
  .catch(err => console.error("🔴 Error de conexión a PostgreSQL:", err));

module.exports = pool;
