const { Client } = require('pg'); // same as `const Client = require('pg').Client`
const postgresUrl = 'postgres://localhost/brooklyn_restaurants';

// https://node-postgres.com/api/client

// Create a new Client instance to connect to the database
// The "bridge" between our node app and our Postgres db
const client = new Client(postgresUrl);

// Make the connection (see documentation)
client
  .connect()
  .then(() => console.log('---- Connected ----'))
  .catch((error) => console.error('---- Connection error ----\n', error.stack))

// Write function to fetch restaurants from database
const fetchRestaurants = async () => {

  // Query for restaurants
  try {
    const data = await client.query(`SELECT * FROM restaurants;`);
    // What does the data look like?
    console.log('\n data --> ', data, '\n');

    // Why not just pull the `rows` property off of the data (Result) object?
    console.log('\n data.rows --> ', data.rows, '\n');

    // We can even iterate through our row results and log to our console.
    data.rows.forEach(restaurant => {
      const { id, name, category, neighborhood } = restaurant
      console.log(`${id}. ${name} serves the best ${category} in ${neighborhood}.`)
    })
  }

  // Catch any errors that may occur from the query
  catch (error) {
    console.log('---- fetchRestaurants error ----\n', error);
  }

  // Regardless of success/failure, close the connection (see documentation)
  finally {
    client
      .end()
      .then(() => console.log('\n---- Disconnected ----\n'))
      .catch(err => console.error('---- Error during disconnection ----\n', err.stack))
  }
};

fetchRestaurants()
