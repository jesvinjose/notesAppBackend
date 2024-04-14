// database.js
const mysql = require('mysql2/promise'); // Import the promise-compatible version

const pool = mysql.createPool({
  host: 'sql6.freesqldatabase.com',
  port: '3306',
  user: 'sql6698624',
  password: 'UDE2iCLZwE',
  database: 'sql6698624',
  connectionLimit: 10,
});

// Attempt to acquire a connection from the pool
pool.getConnection()
  .then(connection => {
    console.log('Database connection successful');
    connection.release(); // Release the connection
  })
  .catch(error => {
    console.error('Error connecting to database:', error);
  });

module.exports = { pool };