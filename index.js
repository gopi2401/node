const express = require('express');
const mySql = require('mysql');
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors());
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('hello world')

})
app.post('/', (req, res) => {
    res.send('hello world')

})
app.get('/:id', (req, res) => {
    res.send('hello world')

})
app.put('/:id', (req, res) => {
    res.send('hello world')

})
app.delete('/:id', (req, res) => {
    res.send('hello world')

})

app.listen(PORT, () => {
    console.log(`server running port http://localhost:${PORT}/`);
})