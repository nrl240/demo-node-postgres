### Steps

**1. Create database**
- Options:
  - Running the command `createdb brooklyn_restaurants` in the terminal.
    - PostgreSQL documentation: [createdb](https://www.postgresql.org/docs/9.1/app-createdb.html)
  - Using `psql` command line interface, run `CREATE DATABASE brooklyn_restaurants;` then check that it was created successfully by running, `SELECT datname FROM pg_catalog.pg_database WHERE lower(datname) = lower('brooklyn_restaurants');`, **OR** by looking at the databases in a GUI like Postico.
    - To exit `psql`, type `\q` and press enter.
    - PostgreSQL documentation: [CREATE DATABASE](https://www.postgresql.org/docs/9.0/sql-createdatabase.html)
  - Using a GUI like Postico. Interfaces vary, but it should be user-friendly enough as to click a `+Database` button and type in the database name, `brooklyn_restaurants`.

**2. Run seed**
- `npm run seed` in your terminal.
  - See the `package.json` file to see what this command runs:
    - `"seed": "psql -d brooklyn_restaurants -a -f ./restaurants.sql"`
      - `-d [dbname]`: short for `--dbname=dbname`, the database name to connect to
      - `-a`: short for `--echo-all`, prints all nonempty input lines to std output
      - `-f [filename]`: short for `--file=filename`, reads commands from the filename

**3. Code away**
- Go to the `index.js` file and play around with queries.
