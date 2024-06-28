const mysql = require('mysql');

// Konfigurasi database
// const db = mysql.createConnection({
//   host: 'localhost', // ganti dengan host database Anda
//   user: 'root', // ganti dengan user database Anda
//   password: 'tigaroda' // ganti dengan password user database Anda
// });

// // Membuat koneksi ke MySQL
// db.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL:', err);
//     return;
//   }
const Pool = require('pg').Pool
const db = new Pool({
  user: 'postgres.dhdldlxbsannkartvfiu',
  host: 'aws-0-ap-southeast-1.pooler.supabase.com',
  database: 'postgres',
  password: '@Januari2024',
  port: 6543,
})
  console.log('Connected to MySQL.');

  // Membuat database jika belum ada
  // db.query('CREATE DATABASE IF NOT EXISTS monitoring', (err) => {
  //   if (err) {
  //     console.error('Error creating database:', err);
  //     return;
  //   }
  //   console.log('Database "monitoring" created or already exists.');

  //   // Menggunakan database monitoring
  //   db.query('USE monitoring', (err) => {
  //     if (err) {
  //       console.error('Error using database:', err);
  //       return;
  //     }

  //     // Membuat tabel monitoring_air jika belum ada
  //     const createTableQuery = `
  //       CREATE TABLE IF NOT EXISTS monitoring_air (
  //         id INT AUTO_INCREMENT PRIMARY KEY,
  //         data VARCHAR(255) NOT NULL,
  //         timestamp VARCHAR(255) NOT NULL
  //       )
  //     `;

      
  //     // Membuat tabel monitoring_air jika belum ada
  //     const createTableQueryMqtt = `
  //       CREATE TABLE IF NOT EXISTS monitoring_air_mqtt (
  //         id INT AUTO_INCREMENT PRIMARY KEY,
  //         data VARCHAR(255) NOT NULL,
  //         timestamp VARCHAR(255) NOT NULL
  //       )
  //     `;

  //     db.query(createTableQuery, (err) => {
  //       if (err) {
  //         console.error('Error creating table:', err);
  //         return;
  //       }
  //       console.log('Table "monitoring_air" created or already exists.');
  //     });
      
  //     db.query(createTableQueryMqtt, (err) => {
  //       if (err) {
  //         console.error('Error creating table:', err);
  //         return;
  //       }
  //       console.log('Table "monitoring_air" created or already exists.');
  //     });
  //   });
  // });
// });

module.exports = db;
