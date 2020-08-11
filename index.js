const { Client } = require('pg') // same as `const Client = require('pg').Client`
const postgresUrl = 'postgres://localhost/restaurant_directory'

// Create a new Client instance to connect to the database
// The "bridge" between our node app and our Postgres db
const client = new Client(postgresUrl)

// Connect to database
const connect = async () => {
  try {
    await client.connect()
    console.log('---- CONNECTED TO DB ----')
  } catch (error) {
    console.log('---- ERROR CONNECTING ----')
    console.error(error)
  }
}

// Disconnect from database
const disconnect = async () => {
  try {
    client.end()
    console.log('---- DISCONNECTED SUCCESSFULLY ----')
  } catch (error) {
    console.log('---- ERROR DISONNECTING ----')
    console.error(error)
  }
}

// Fetch restaurants from database
const fetchRestaurants = async () => {
  try {
    connect()

    // Query for restaurants
    const data = await client.query(`
      SELECT r.id,
        r.name AS name,
        r.category,
        n.name AS neighborhood
      FROM restaurants AS r
      JOIN neighborhoods AS n ON r.neighborhood_id = n.id
      WHERE n.name = 'Williamsburg' OR
        r.category = 'Italian'
    ;`)

    // What does the data look like?
    console.log('\n data --> ', data, '\n')

    // Why not just pull the `rows` property off of the data (Result) object?
    console.log('\n data.rows --> ', data.rows, '\n')

    // We can even iterate through our row results and log to our console.
    data.rows.forEach((restaurant) => {
      const { id, name, category, neighborhood } = restaurant
      console.log(
        `${id}. ${name} serves the best ${category} in ${neighborhood}.`
      )
    })

    disconnect()
  } catch (error) {
    console.log('---- ERROR OCCURRED ----')
    console.error(error)
  }
}

fetchRestaurants()
