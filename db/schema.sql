DROP DATABASE IF EXISTS census_learn_sql_tabl

CREATE DATABASE census_learn_sql_tabl

USE census_learn_sql_tabl;

CREATE TABLE census_learn_sql (
    id INT NOT NULL AUTO_INCREMENT,
    Education VARCHAR(255) NOT NULL,
    pop_count VARCHAR(255) NOT NULL,
    avg_age FLOAT(3,1),
    PRIMARY KEY(id)
);

