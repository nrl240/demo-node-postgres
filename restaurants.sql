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

INSERT INTO boroughs (id, name)
VALUES (1, 'Brooklyn'),
  (2, 'Bronx'),
  (3, 'Manhattan'),
  (4, 'Staten Island'),
  (5, 'Queens');

INSERT INTO neighborhoods (id, name, borough_id)
VALUES (1, 'Fort Green', 1),
  (2, 'Gowanus', 1),
  (3, 'Williamsburg', 1),
  (4, 'Greenpoint', 1),
  (5, 'Bushwick', 1),
  (6, 'Park Slope', 1),
  (7, 'Lower East Side', 3),
  (8, 'Chelsea', 3),
  (9, 'Meatpacking District', 3),
  (10, 'West Village', 3),
  (11, 'Clinton Hill', NULL),
  (12, 'Tribeca', NULL),
  (13, 'Bedstuy', NULL),
  (14, 'South Bronx', NULL),
  (15, 'Astoria', NULL);

INSERT INTO restaurants (id, name, category, neighborhood_id)
VALUES (1, 'Olea', 'Mediterranean', 1),
  (2, 'Claro', 'Mexican', 2),
  (3, 'Misi', 'Italian', 3),
  (4, 'El Born', 'Catalan', 4),
  (5, 'Union Pizza Works', 'Pizza', 5),
  (6, 'Santa Panza', 'Pizza', 5),
  (7, 'Lighthouse', 'American', 3),
  (8, 'Runner & Stone', 'American', 2),
  (9, 'al di la Trattoria', 'Italian', 6),
  (10, 'Stone Park Inn', 'American', 6),
  (11, 'Brunetti', 'Italian', 10),
  (12, 'Fig & Olive', 'Mediterranean', 9),
  (13, 'Malaparte', 'Italian', 10),
  (14, 'Burger King', 'American', NULL),
  (15, 'Shake Shack', 'American', NULL),
  (16, 'The Bedford', 'American', NULL),
  (17, 'Kos Kaffe', 'Cafe', NULL);
