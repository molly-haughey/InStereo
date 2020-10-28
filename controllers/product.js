const express = require('express');
const router = express.Router();
const postgres = require('../postgres.js');

router.get('product', (req, res) => {
      res.json()
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((error) => {
        setError(error);
      });
  })

  router.post('/cart', (req, res) => {
    postgres.query('SELECT id FROM vinyls;', (err, results) => {
        res.json(results.rows)
    })
})