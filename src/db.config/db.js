const mySql = require('mysql2');

const db = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'my_db'
});

db.connect((err) => {
    if (err) throw err;
    console.log("Database Connected!");
});
/*
db.query('CREATE DATABASE IF NOT EXISTS my_db', (err, rows, fields) => {
    if (err) throw err
    console.log('Database created!', rows)
})
db.query(`CREATE TABLE IF NOT EXISTS users (
    id BIGINT UNSIGNED AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    created_at DATETIME NOT NULL,
    PRIMARY KEY (id)
);`, (err, rows, fields) => {
    console.log('table created!', rows)
})
db.query(`insert into users (name, email,phone)
values('test','example@gmail.com','+91678901234');`, (err, rows, fields) => {
    console.log('table created!', rows)
}) 
*/
module.exports = db;