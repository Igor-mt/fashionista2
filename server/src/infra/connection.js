require('dotenv').config()

const pgPromise = require('pg-promise')()

const database = pgPromise({
    connectionString: process.env.DB_CONNECTION,
    ssl: {
        rejectUnauthorized: false
    },
    max: 20
})

module.exports = database;