const express = require('express');
const app = express();
const postgres = require('./postgres.js');

app.use(express.json());
app.use(express.static('public'))

const vinylsController = require('./controllers/vinyls.js');
app.use('/vinyls', vinylsController);
const cartController = require('./controllers/cart.js');
app.use('/cart', cartController);

postgres.connect();

app.listen(process.env.PORT || 3000, () => {
    console.log('listening');
})
