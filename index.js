const { Client } = require('pg') // same as `const Client = require('pg').Client
const postgresUrl = 'postgres://localhost/brooklyn_restaurants'

const client = new Client(postgresUrl)

client
  .connect()
  .then(() => console.log('---- Connected ----'))
  .catch((err) => console.error('---- Connection error ----\n', err.stack))

// Translate to async/await

const fetchRestaurants = async () => {
  try {
    const data = await client.query(`
      SELECT * FROM restaurants
        WHERE neighborhood = 'Williamsburg' OR
              category = 'Italian'
    ;`)
    // console.log('---- DATA.ROWS ----\n', data.rows)
    data.rows.forEach(restaurant => {
      const { name, category, neighborhood } = restaurant // destructuring
      // const name = restaurant.name // same as above
      // const restaurantName = resturant.name (I want to name my variable something else)
      console.log(`${name} serves the best ${category} in ${neighborhood}.`)
    })
  } catch(err) {
    console.error('---- Query error ----\n', err.stack)
  }

  // client
  //   .end()
  //   .then(() => console.log('\n---- Disconnected ----\n'))
  //   .catch(err => console.error('---- Error during disconnection ----\n', err.stack))

  disconnector()
}


fetchRestaurants()

const disconnector = () => {
  try {
    client.end()
    console.log('\n---- Disconnected ----\n')
  } catch(err) {
    console.error('---- Error during disconnection ----\n', err.stack)
  }
}
