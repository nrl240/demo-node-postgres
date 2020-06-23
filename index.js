const { Client } = require('pg'); // same as `const Client = require('pg').Client`
const postgresUrl = 'postgres://localhost/restaurant_directory';

// Create a new Client instance to connect to the database
// The "bridge" between our node app and our Postgres db
const client = new Client(postgresUrl);

// Make the connection (see documentation)
client
  .connect()
  .then(() => console.log('---- Connected ----'))
  .catch((err) => console.error('---- Connection error ----\n', err.stack))

// Write function to fetch restaurants from database
const fetchRestaurants = async () => {

  // Query for restaurants
  try {
    const data = await client.query(`
      SELECT r.id,
             r.name AS name,
             r.category,
             n.name AS neighborhood
      FROM restaurants AS r
      JOIN neighborhoods AS n ON r.neighborhood_id = n.id
      WHERE n.name = 'Williamsburg' OR
            r.category = 'Italian'
    ;`);
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
    catch (err) {
      console.error('---- fetchRestaurants error ----\n', err);
    }

    // Regardless of success/failure, close the connection (see documentation)
    client
      .end()
      .then(() => console.log('\n---- Disconnected ----\n'))
      .catch(err => console.error('---- Error during disconnection ----\n', err.stack))

    // Use async/await version from below
    // disconnector()

  }

  fetchRestaurants()
