DROP TABLE IF EXISTS restaurants;

CREATE TABLE restaurants (
  id integer PRIMARY KEY,
  name character varying(100) NOT NULL,
  category character varying(100) NOT NULL,
  neighborhood character varying(200) NOT NULL
);

INSERT INTO restaurants (id, name, category, neighborhood) VALUES
  (1, 'Olea', 'Mediterranean', 'Fort Greene'),
  (2, 'Claro', 'Mexican', 'Gowanus'),
  (3, 'Misi', 'Italian', 'Williamsburg'),
  (4, 'El Born', 'Catalan', 'Greenpoint'),
  (5, 'Union Pizza Works', 'Pizza', 'Bushwick'),
  (6, 'Santa Panza', 'Pizza', 'Bushwick'),
  (7, 'Lighthouse', 'American', 'Williamsburg'),
  (8, 'Runner & Stone', 'American', 'Gowanus'),
  (9, 'al di la Trattoria', 'Italian', 'Park Slope'),
  (10, 'Stone Park Inn', 'American', 'Park Slope');
