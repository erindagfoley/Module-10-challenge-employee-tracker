INSERT INTO department (name) VALUES  
        ('Sales'),
        ('Engineering'),
        ('Finance'),
        ('Legal');

INSERT INTO role (title, salary, department_id) VALUES  
        ('Salesperson', 100000, 1),
        ('Lead Engineer', 200000, 2),
        ('Software Engineer', 150000, 2),
        ('Account Manager', 190000, 3),
        ('Accountant', 125000, 3),
        ('Legal Team Lead', 300000, 4),
        ('Lawyer', 250000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES  
        ('Alex', 'Chan', 1, NULL),
        ('Erin', 'Foley', 2, NULL),
        ('Mike', 'Foley', 3, 2), 
        ('Molly', 'McHenry', 4, NULL),
        ('Jocelyn', 'Magnuson', 5, 4), 
        ('Eddie', 'Van Halen', 6, NULL);
