const express = require(`express`);
const router = express.Router();
const path = require(`path`);


router.get(`/`, (req, res) => {
    res.sendFile(path.join(__dirname, `../views/index.html`));
});


const apiRoutes = require(`./apiController`);
router.use(`/api`, apiRoutes);

const noteRoutes = require(`./notesController`);
router.use(`/notes`, noteRoutes);


module.exports = router;