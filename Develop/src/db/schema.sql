DROP DATABASE IF EXISTS business_db;
CREATE DATABASE business_db;

-- Connect to the database if using psql
-- \c business_db; -- This line should be removed if not using psql

CREATE TABLE department (
    id SERIAL PRIMARY KEY,
    department_name VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE role (
    id SERIAL PRIMARY KEY,
    job_title VARCHAR(30) NOT NULL, 
    salary INTEGER NOT NULL,
    department_id INTEGER REFERENCES department(id) NOT NULL -- Establish foreign key relationship
);

CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER REFERENCES role(id), -- Establish foreign key relationship
    manager_id INTEGER REFERENCES employee(id) -- Establish foreign key relationship
);