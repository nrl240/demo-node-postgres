### Steps

**Create database**
- Options:
  - Using `psql` command line interface, run `CREATE DATABASE pokemonworld;` then check that it was created successfully by running, `SELECT datname FROM pg_catalog.pg_database WHERE lower(datname) = lower('pokemonworld');`, **OR** by looking at the databases in a GUI like Postico.
    - To exit `psql`, type `exit` and press enter.
    - [PostgreSQL documentation: CREATE DATABASE](https://www.postgresql.org/docs/9.0/sql-createdatabase.html)
  - Using a GUI like Postico. Interfaces vary, but it should be user-friendly enough as to click a `+ Database` button and type in the database name, `pokemonworld`.

