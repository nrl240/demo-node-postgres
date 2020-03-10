DROP TABLE IF EXISTS pokemon;

CREATE TABLE pokemon (
  id integer PRIMARY KEY,
  name character varying(100) NOT NULL,
  element character varying(100) NOT NULL,
  specialAttack character varying(200) NOT NULL
);

INSERT INTO pokemon (id, name, element, specialAttack) VALUES
  (1, 'Bulbasaur', 'Grass', 'Solar Beam'),
  (2, 'Squirtle', 'Water', 'Hydro Pump'),
  (3, 'Charmander', 'Fire', 'Flamethrower'),
  (4, 'Pikachu', 'Electric', 'Thunderbolt'),
  (5, 'Umbreon', 'Dark', 'Dark Pulse'),
  (6, 'Garchomp', 'Dragon', 'Draco Meteor'),
  (7, 'Sylveon', 'Fairy', 'Dazzling Gleam');
