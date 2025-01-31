import inquirer from 'inquirer';
//import express from 'express';
import { pool, connectToDb } from './db/connection.js';
await connectToDb();


function showMenu(){
  inquirer.prompt([{
    type: 'list',
    name: 'menu',
    message: 'What would you like to do? (use arrow keys)',
    choices: [
      'View all departments',
      'View all roles',
      'View all employees',
      'Add a department',
      'Add a role',
      'Add an employee',
      'Update an employee role',
      'Exit App'
    ],
  }])
    .then((answers) => {
      if (answers.menu === 'View all departments') {
        pool.query('SELECT * FROM department;', (err, result) => {
            if (err) {
                console.error(err);
              } else {
                console.table(result.rows);
                showMenu();
              }
        });
      }
      else if (answers.menu === 'View all roles') {
        pool.query('SELECT * FROM role;', (err, result) => {
            if (err) {
                console.error(err);
              } else {
                console.table(result.rows);
                showMenu();
              }
        });
      }
      else if (answers.menu === 'View all employees'){
        pool.query('SELECT * FROM EMPLOYEE;', (err, result) => {
            if (err) {
                console.error(err);
              } else {
                console.table(result.rows)
                showMenu();
              }
        });
      }
      else if (answers.menu === 'Add a department') {
        addNewDepartment();
      }
      else if (answers.menu === 'Add a role') {
        addNewRole();
      }
      else if (answers.menu === 'Add an employee') {
        addNewEmployee();
      }
      else if (answers.menu === 'Update an employee role') {
        updateEmployeeRole();
      }else{
        pool.end()
        process.exit(0)
      }
    });
}

showMenu();

function addNewDepartment() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'departmentName',
        message: 'Enter the name of the new department:',
      },
    ])
    .then((response) => {
      pool.query('INSERT INTO department (name) VALUES ($1)', [response.departmentName], (err, result) => {
        if (err) {
          console.error(err);
        } else if (result) {
          console.table(`Department ${response.departmentName} has been added`);
        }
        showMenu();
      });
    });
}

function addNewEmployee() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'firstName',
        message: 'Enter the first name of the new employee:',
      },
      {
        type: 'input',
        name: 'lastName',
        message: 'Enter the last name of the new employee:',
      },
      {
        type: 'input',
        name: 'roleId',
        message: 'Enter the role id of the new employee:',
      },
      {
        type: 'input',
        name: 'managerId',
        message: 'Enter the manager id of the new employee:',
      },
    ])
    .then((response) => {
      pool.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4);',
        [response.firstName, response.lastName, response.roleId, response.managerId], (err, result) => {
          if (err) {
            console.error(err);
        } else if (result) {
            console.log(`Employee ${response.firstName} ${response.lastName} and their role ID of ${response.roleID} and their manager ID of ${response.managerId} has been added`);
          }
          showMenu();
        });
    });
}

function addNewRole() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'roleTitle',
        message: 'Enter the title of the new role:',
      },
      {
        type: 'input',
        name: 'roleSalary',
        message: 'Enter the salary of the new role:',
      },
      {
        type: 'input',
        name: 'deptId',
        message: 'Enter the department id of the new role:',
      },
    ])
    .then((response) => {
      pool.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)',
        [response.roleTitle, response.roleSalary, response.deptId], (err, result) => {
          if (err) {
            console.error(err);
        } else if (result) {
            console.log(`Role ${response.roleTitle} with a salary of ${response.roleSalary} and a department ID of ${response.department_id} has been added`);
          }
          showMenu();
        });
    });
}
