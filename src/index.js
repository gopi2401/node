const express = require('express');
const cors = require('cors');
const db = require('./db.config/db');
const apiv1 = require('./controllers/api_v1')
const app = express();

app.use(express.json());
app.use(cors());
const PORT = 3000;
app.use('/api/v1/', apiv1)
app.get('/', (req, res) => {
    res.send('hello world')

})

app.listen(PORT, () => {
    console.log(`server running port http://localhost:${PORT}/`);
})