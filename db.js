// 1. Set up the node-postgres driver
const pg = require('pg');
const postgresUrl = 'postgres://localhost/restaurant_directory'; // path to our database
const client = new pg.Client(postgresUrl); // creates a client instance

// 2. Connect to the `postgres` server
client.connect();

// 3. Make the client available as a Node module
module.exports = client;
