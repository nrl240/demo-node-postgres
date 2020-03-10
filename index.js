const { Client } = require('pg'); // same as `const Client = require('pg').Client`
const postgresUrl = 'postgres://localhost/brooklyn_restaurants';

const client = new Client(postgresUrl);

const connector = async () => {
  try {
    client.connect();
    console.log('Successfully connected!');
  } catch (error) {
    console.log('Oh no! An Error!: ', error);
  }
};
connector();

const fetchRestaurants = async () => {
  try {
    const data = await client.query(`SELECT * FROM restaurants;`);
    // console.log('\n data --> ', data, '\n');
    console.log('\n data.rows --> ', data.rows, '\n');
    // data.rows.forEach(row => {
    //   console.log(row);
    // });
    data.rows.forEach(restaurant => {
      const { id, name, category, neighborhood } = restaurant
      console.log(`${id}. ${name} serves the best ${category} in ${neighborhood}.`)
    })
  } catch (error) {
    console.log('Error: ', error);
  }
};

fetchRestaurants();
