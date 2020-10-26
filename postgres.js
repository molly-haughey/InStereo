const Client = require('pg').Client

const client = new Client({
    connectionString: process.env.DATABASE_URL || 'postgresql://localhost:5433/shop',
})

module.exports = client;
