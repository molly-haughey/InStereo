const express = require('express');
const router = express.Router();
const postgres = require('../postgres.js');

router.get('/', (req, res) => {
    postgres.query('SELECT * FROM vinyls ORDER BY id ASC;', (err, results) => {
        res.json(results.rows)
    });
});

router.post('/', (req, res) => {
    console.log(req.body)
    postgres.query(`INSERT INTO vinyls ( img, type, title, release_title, credit, artist, anv, label, genre, style, country, year, format, catno, barcode, track, price ) VALUES ('${req.body.img}', '${req.body.type}', '${req.body.title}', '${req.body.release_title}', '${req.body.credit}', '${req.body.artist}', '${req.body.anv}', '${req.body.label}', '${req.body.genre}', '${req.body.style}', '${req.body.country}', '${parseInt(req.body.year)}', '${req.body.format}', '${req.body.catno}', '${req.body.barcode}', '${req.body.track}', '${parseInt(req.body.price)}')` , (err, results) => {
        if (err) {
            res.json(err)
        }
        postgres.query('SELECT * FROM vinyls ORDER BY id ASC;', (err, results) => {
            res.json(results.rows)
        });
    })
});

router.delete('/:id', (req, res) => {
    postgres.query(`DELETE FROM vinyls WHERE id = ${req.params.id};`, (err, results) => {
        postgres.query('SELECT * FROM vinyls ORDER BY id ASC;', (err, results) => {
            res.json(results.rows)
        });
    });
});

router.put('/:id', (req, res) => {
    console.log(req.params.id + "here")
    postgres.query(`UPDATE vinyls SET img = '${req.body.img}', type = '${req.body.type}', title = '${req.body.title}', release_title = '${req.body.release_title}', credit = '${req.body.credit}', artist = '${req.body.artist}', anv = '${req.body.anv}', label = '${req.body.label}', genre = '${req.body.genre}', style = '${req.body.style}', country = '${req.body.country}', year = ${parseInt(req.body.year)}, format = '${req.body.format}', catno = '${req.body.catno}', barcode = '${req.body.barcode}', track = '${req.body.track}', price = ${parseInt(req.body.price)} WHERE id = ${req.params.id}`, (err, results) => {
        postgres.query('SELECT * FROM vinyls ORDER BY id ASC;', (err, results) => {
            res.json(results.rows)
        });
    })
});

module.exports = router;
