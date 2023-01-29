const express = require('express');
const router = express.Router();
const fs = require(`fs`);

router.get(`/notes`, (req, res) => {
    fs.readFile(`./db/db.json`, `utf-8`, (err, data) => {
        if (err) {
            res.status(500).send(`Whelp, that's our bad. Sorry.`);
            throw err;
        } else {
            const notesData = JSON.parse(data);
            res.json(notesData);
        }
    });
});

router.post(`/notes`, (req, res) => {
    fs.readFile(`./db/db.json`, `utf-8`, (err, data) => {
        if (err) {
            res.status(500).send(`Whelp, that's our bad. Sorry.`);
            throw err;
        } else {
            const notesData = JSON.parse(data);
            req.body.id = notesData.length + 1;
            notesData.push(req.body);
            fs.writeFile("./db/db.json", JSON.stringify(notesData, null, 4), (err) => {
                if (err) {
                    res.status(500).send("oh no!");
                    throw err;
                } else {
                    res.send("data added!");
                }
            });
        }
    });
});

router.delete(`/notes/:id`, (req, res) => {
    fs.readFile(`./db/db.json`, `utf-8`, (err, data) => {
        if (err) {
            res.status(500).send(`Whelp, that's our bad. Sorry.`);
            throw err;
        } else {
            const notesData = JSON.parse(data);
            //remove the desired note from array
            notesData.splice(req.params.id, 1);
            //resequence the note ids
            notesData.forEach((note, i) => {
                note.id = i;
            });
            fs.writeFile("./db/db.json", JSON.stringify(notesData, null, 4), (err) => {
                if (err) {
                    res.status(500).send("oh no!");
                    throw err;
                } else {
                    res.send("data added!");
                }
            });
        }
    });
});


module.exports = router;