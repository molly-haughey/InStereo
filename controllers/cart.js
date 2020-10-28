const express = require('express');
const router = express.Router();
const postgres = require('../postgres.js');

router.get('/cart', (req, res) => {
    res.json()
    .then((res) => {
      console.log(res.data.vinyls);
      setCarts(res.data.vinyls);
      setPayloader(res.data);
    })
    .catch((error) => {
      setError(error);
});
}
)
     
      
  
  router.post('/cart', (req, res) => {
        postgres.query('SELECT id FROM vinyls;', (err, results) => {
            res.json(results.rows)
        })
    
        // console.log(res);
        // fetchCart();
        // alert("Item Incremented");
    })
    
          
  
  router.delete('/cart/empty-cart', (req, res) => {
      res.json();
      fetchCart();
      props.history.push("/");
  
  })

  module.exports = router;