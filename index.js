const pg = require('pg');
const postgresUrl = 'postgres://localhost/pokemonworld';

const client = new pg.Client(postgresUrl);

const connector = async () => {
  try {
    client.connect();
    console.log('Successfully connected!');
  } catch (error) {
    console.log('Oh no! An Error!: ', error);
  }
};
connector();

const grabPokemon = async () => {
  try {
    const data = await client.query(`SELECT * FROM pokemon;`);
    console.log(data);
    // console.log(data.rows)
    data.rows.forEach(row => {
      console.log(row);
    });
  } catch (error) {
    console.log('Error: ', error);
  }
};

grabPokemon();
