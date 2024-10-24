const express = require('express');
const db = require('../db.config/db');

const apiv1 = express.Router();

apiv1.get('/users', async (req, res) => {
    try {
        const [data] = await db.promise().query(`SELECT * FROM users;`)
        res.status(200).json({
            data
        });
    } catch (e) {
        res.status(500).json({ error: `Internal Server Error ${e}` });
    }
});

apiv1.get('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const [data] = await db.promise().query(`SELECT * FROM users WHERE id = ?;`, [id])
        res.status(200).json({
            data
        });
    } catch (e) {
        res.status(500).json({ error: `Internal Server Error ${e}` });
    }
});

apiv1.post('/users', async (req, res) => {
    try {
        const { name, email, phone } = req.body;
        const [{ insertId }] = await db.promise().query(`INSERT INTO users (name, email, phone)
            VALUES (?, ?, ?);`, [name, email, phone]);
        const [data] = await db.promise().query(`SELECT * FROM users WHERE id = ?;`, [insertId]);
        res.status(200).json({
            data
        });
    } catch (e) {
        res.status(500).json({ error: `Internal Server Error ${e}` });
    }
});

apiv1.put('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, phone } = req.body;
        const [[exid]] = await db.promise().query(`SELECT id as exid FROM users WHERE id = ?;`, [id]);
        if (exid === undefined) res.status(404).json({ error: "record not found!" })
        else {
            const obj = {
                name,
                email,
                phone
            }
            let updateQuery = 'UPDATE users SET ';
            let field = [];
            for (let val in obj) {
                if (obj[val] != null)
                    field.push(`${val} = ?`)
                else
                    delete obj[val];
            }
            updateQuery += `${field.join(',')}
        WHERE id = ${id}`;
            const [{ changedRows }] = await db.promise().query(updateQuery, Object.values(obj));
            const [data] = await db.promise().query(`SELECT * FROM users WHERE id = ?;`, [id]);
            res.status(200).json({
                changes: changedRows,
                data
            });
        }
    } catch (e) {
        res.status(500).json({ error: `Internal Server Error ${e}` });
    }
})

apiv1.delete('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const [data] = await db.promise().query(`DELETE FROM users WHERE id = ? ;`, [id]);
        res.status(200).json({
            message: `deleted record id ${id}`
        });
    } catch (e) {
        res.status(500).json({ error: `Internal Server Error ${e}` });
    }
})

module.exports = apiv1;