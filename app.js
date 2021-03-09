const express = require('express');
const morgan = require('morgan');
const chalk = require('chalk');
const client = require('./db');

const app = express();

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const baseQuery = `
  SELECT r.id,
         r.name AS name,
         r.category,
         n.name AS neighborhood,
         b.name AS borough
    FROM restaurants AS r
    LEFT OUTER JOIN neighborhoods AS n
      ON r.neighborhood_id = n.id
    LEFT OUTER JOIN boroughs AS b
      ON n.borough_id = b.id\n
`;

// GET /restaurants
app.get('/restaurants', async (req, res, next) => {
  try {
    const data = await client.query(`${baseQuery};`);
    const restaurants = data.rows;
    res.json(restaurants);
  } catch (error) {
    next(error);
  }
});

// GET /restaurants/:id
app.get('/restaurants/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await client.query(
      `
      ${baseQuery}
        WHERE r.id = $1;
      `,
      [id]
    );
    const restaurant = data.rows[0];
    res.json(restaurant);
  } catch (error) {
    next(error);
  }
});

// POST /restaurants
app.post('/restaurants', async (req, res, next) => {
  try {
    const text = `
      INSERT INTO restaurants(name, category)
        VALUES($1, $2)
        RETURNING *;
    `;
    const values = [req.body.name, req.body.category];
    const data = await client.query(text, values);
    const restaurant = data.rows[0];
    res.status(201).json(restaurant);
  } catch (error) {
    next(error);
  }
});

app.listen(8080, () => {
  console.log(chalk.blueBright('Listening at http://localhost:8080'));
});
