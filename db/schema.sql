DROP DATABASE IF EXISTS census_db;

CREATE DATABASE census_db;

USE census_db;

CREATE TABLE census_table (
    id INT NOT NULL AUTO_INCREMENT,
    Education VARCHAR(255) NOT NULL,
    pop_count VARCHAR(255) NOT NULL,
    avg_age FLOAT(3,1),
    PRIMARY KEY(id)
);

