// const Client = require('pg').Client
const { Client } = require('pg') // using destructuring

const postgresUrl = 'postgres://localhost/brooklyn_restaurants' // path to our database

const client = new Client(postgresUrl) // creates a client instance

// Async/Await
// Function to connect to database
const connect = async () => {
  try {
    await client.connect()
    console.log('--- CONNECTED TO DB ---')
  } catch (error) {
    console.log('--- ERROR CONNECTING ---')
    console.error(error)
  }
}

// Function to disconnect from database
const disconnect = async () => {
  try {
    await client.end()
    console.log('--- DISCONNECTED FROM DB ---')
  } catch (error) {
    console.log('--- ERROR DISCONNECTING ---')
    console.error(error)
  }
}

// Fetch restaurants from database
const fetchRestaurants = async () => {
  try {
    // Connect to db
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

    // What does that data look like??
    // console.log('DATA: \n', data)

    // Well how to I get access to those results??
    // console.log('ROWS aka query results: \n', data.rows)

    data.rows.forEach(restaurant => {
      const { id: restaurantId, name, category, neighborhood } = restaurant

      console.log(`${restaurantId}. ${name} serves the best ${category} in ${neighborhood}.`)
    })

    // Disconnect to db
    disconnect()

    return data.rows
  } catch (error) {
    console.error(error)
  }
}

const results = fetchRestaurants()

console.log(results) // Pending Promise

// // Alternatively, using Promise chaining
// client.connect() // Connect to database
// .then(() => {
//   console.log('--- CONNECTED TO DB ---')

//   // Fetch restaurants
//   return client.query(`
//     SELECT r.id,
//       r.name AS name,
//       r.category,
//       n.name AS neighborhood
//     FROM restaurants AS r
//     JOIN neighborhoods AS n ON r.neighborhood_id = n.id
//     WHERE n.name = 'Williamsburg' OR
//       r.category = 'Italian'
//   ;`)
//   .then((data) => {
//     // Do something with the query result data in here
//     data.rows.forEach(restaurant => {
//       const { id: restaurantId, name, category, neighborhood } = restaurant

//       console.log(`${restaurantId}. ${name} serves the best ${category} in ${neighborhood}.`)
//     })
//   })
//   .catch((err) => {
//     console.error(err)
//   })
// })
// .then(()=> {
//   client.end() // Disconnect from database
//   .then(() => {
//     console.log('--- DISCONNECTED FROM DB ---')
//   })
//   .catch((err) => {
//     console.log('--- ERROR DISCONNECTING ---')
//     console.error(err)
//   })
// })
// .catch((err) => {
//   console.log('--- ERROR CONNECTING ---')
//   console.error(err)
// })
