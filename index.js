//const { application } = require('express');
const express = require('express');
const PORT = process.env.PORT || 3030;
const app = express();

//put in controllers that will use this
//const notesData = require('./db/db.json')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`public`));

const allRoutes = require(`./controllers`);
app.use(allRoutes);

app.listen(PORT, () => {;
    console.log(`App listening at http://localhost:${PORT}`);
});