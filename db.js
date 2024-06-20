const mysql = require('mysql');

// Konfigurasi koneksi ke database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'tigaroda',
  database: 'monitoring_air'
});

// Menghubungkan ke database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Menyimpan referensi database di variabel global
module.exports = db;