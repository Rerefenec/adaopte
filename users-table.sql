--- Create table animals_to_adopte
CREATE TABLE animals_to_adopte (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    age INTEGER NOT NULL,
    breed TEXT NOT NULL,
    type TEXT NOT NULL,
    city TEXT NOT NULL,
    zip INTEGER NOT NULL,
    description TEXT NOT NULL,
    image TEXT NOT NULL
);

CREATE TABLE user (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    zip INTEGER NOT NULL,
    email TEXT NOT NULL,
    created_at TEXT NOT NULL,
    animal_wanted TEXT NOT NULL,
    adopted_animal_id INTEGER REFERENCES adopted_animal(id)
);

CREATE TABLE adopted_animal (
    id INTEGER PRIMARY KEY,
    date_of_adoption TEXT NOT NULL,
    animals_to_adopte_id INTEGER REFERENCES animals_to_adopte(id)
    user_id INTEGER REFERENCES user(id)
    
);


CREATE TABLE adoption (
    id INTEGER PRIMARY KEY,
    adopted_animal_id INTEGER REFERENCES adopted_animal(id),
    
);







