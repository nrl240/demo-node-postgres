## **Setting Up**

### **1. Create database**
- **Options:**
  1. Run the command `createdb restaurant_directory` in your terminal.
      - PostgreSQL documentation: [createdb](https://www.postgresql.org/docs/9.1/app-createdb.html)
  2. Use the `psql` command line interface, run `CREATE DATABASE restaurant_directory;` then check that it was created successfully by running, `SELECT datname FROM pg_catalog.pg_database WHERE lower(datname) = lower('restaurant_directory');`, **OR** by looking at the databases in a GUI like Postico.
      - To exit `psql`, type `\q` and press enter.
      - PostgreSQL documentation: [CREATE DATABASE](https://www.postgresql.org/docs/9.0/sql-createdatabase.html)
  3. Use a GUI like Postico.
      - Interfaces vary, but it should be user-friendly enough as to click a `+Database` button and type in the database name, `restaurant_directory`.

### **2. Run seed**
- `npm run seed` in your terminal.
  - See the `package.json` file to see what this command runs:
    - `"seed": "psql -d restaurant_directory -a -f ./restaurants.sql"`
      - `-d [dbname]`: short for `--dbname=dbname`, the database name to connect to
      - `-a`: short for `--echo-all`, prints all nonempty input lines to std output
      - `-f [filename]`: short for `--file=filename`, reads commands from the filename

### **3. Code away**
- Go to the `index.js` file and play around with queries using `pg` ([node-postgres](https://node-postgres.com/)).
