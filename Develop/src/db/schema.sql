DROP DATABASE IF EXISTS business_db;
CREATE DATABASE business_db;

\c business_db;

CREATE TABLE department (
  id SERIAL PRIMARY KEY,
  department_names VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
  id SERIAL PRIMARY KEY,
  upper_manager VARCHAR(30) NOT NULL
  middle_manager VARCHAR(30) NOT NULL
  entry_level VARCHAR(30) NOT NULL
);

CREATE TABLE employees (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  department_id INTEGER,
);