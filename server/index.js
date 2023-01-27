//

const { application } = require('express');
const express = require('express');
const path = require('path');
const port = 3030;
const app = express();

const notesData = require('../db/db.json')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../views/index.html'));
});

app.get('/api/notes', (req, res) => {
    res.json(notesData);
});

app.listen(port, () => {;
    console.log(`Example app listening at http://localhost:port`);
});