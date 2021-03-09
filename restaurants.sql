DROP TABLE IF EXISTS restaurants,
boroughs,
neighborhoods;

CREATE TABLE boroughs (
  id SERIAL PRIMARY KEY,
  name character varying(100) NOT NULL
);

CREATE TABLE neighborhoods (
  id SERIAL PRIMARY KEY,
  name character varying(100) NOT NULL,
  borough_id INTEGER,
  FOREIGN KEY (borough_id) REFERENCES boroughs (id)
);

CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY,
  name character varying(100) NOT NULL,
  category character varying(100) NOT NULL,
  neighborhood_id INTEGER,
  FOREIGN KEY (neighborhood_id) REFERENCES neighborhoods (id)
);

INSERT INTO boroughs (name)
VALUES ('Brooklyn'),
  ('Bronx'),
  ('Manhattan'),
  ('Staten Island'),
  ('Queens');

INSERT INTO neighborhoods (name, borough_id)
VALUES ('Fort Green', 1),
  ('Gowanus', 1),
  ('Williamsburg', 1),
  ('Greenpoint', 1),
  ('Bushwick', 1),
  ('Park Slope', 1),
  ('Lower East Side', 3),
  ('Chelsea', 3),
  ('Meatpacking District', 3),
  ('West Village', 3),
  ('Clinton Hill', NULL),
  ('Tribeca', NULL),
  ('Bedstuy', NULL),
  ('South Bronx', NULL),
  ('Astoria', NULL);

INSERT INTO restaurants (name, category, neighborhood_id)
VALUES ('Olea', 'Mediterranean', 1),
  ('Claro', 'Mexican', 2),
  ('Misi', 'Italian', 3),
  ('El Born', 'Catalan', 4),
  ('Union Pizza Works', 'Pizza', 5),
  ('Santa Panza', 'Pizza', 5),
  ('Lighthouse', 'American', 3),
  ('Runner & Stone', 'American', 2),
  ('al di la Trattoria', 'Italian', 6),
  ('Stone Park Inn', 'American', 6),
  ('Brunetti', 'Italian', 10),
  ('Fig & Olive', 'Mediterranean', 9),
  ('Malaparte', 'Italian', 10),
  ('Burger King', 'American', NULL),
  ('Shake Shack', 'American', NULL),
  ('The Bedford', 'American', NULL),
  ('Kos Kaffe', 'Cafe', NULL);
