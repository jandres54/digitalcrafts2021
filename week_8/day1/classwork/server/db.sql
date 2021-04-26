CREATE DATABASE groceries;

CREATE TABLE grocery_list(
  food_items SERIAL PRIMARY KEY,
  description VARCHAR(255)    
);
