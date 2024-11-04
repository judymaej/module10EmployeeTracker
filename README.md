# Employee Tracker

## Description

Employee Tracker is a command-line application that allows users to manage a company's employee database. Built with Node.js, Inquirer, and PostgreSQL, this application enables users to view, add, update, and delete employees, roles, and departments. The Employee Tracker provides an organized and efficient way to keep track of employee information, roles, and organizational structure.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#Technologies-Used)
- [Walkthrough Video](#walkthrough-video)
- [Support](#support)
- [License](#license)

## Installation

**Clone the repository**

```bash
git clone <repository-url>
```

## Navigate to the project directory:

```bash
cd employee-tracker
```

## Install Dependencies

Ensure that Node.js is installed in your terminal

```bash

npm install

```

### Set up PostgreSQL:

Ensure PostgreSQL is installed and running on your machine.
Create a database named company_db.
Run the provided seeds.sql file to create the necessary tables (employee, role, and department) and seed some initial data.

```bash

psql -d company_db -f seeds.sql

```

### Configure Database Connection:

Open the queries.js file and update the database connection settings as needed (e.g., username, password, host, and port).
Usage
Start the application:

```bash
node index.js
```

### Use the menu:

The application provides a main menu with options to:

- View all employees, roles, and departments
- Add new employees, roles, and departments
- Update an employee’s role
- Delete an employee

#### Follow prompts:

- Select an option from the main menu and follow any prompts to enter data.

- After each action, the main menu will reappear, allowing you to perform another task or exit.

#### Exit the application:

- Choose the Exit option in the menu to exit the program.

## Features

- View Employees: View a table of all employees, including their ID, first and last name, title, department, salary, and manager.

- View Roles: View a table of all roles with information about each role’s title, department, and salary.
  View Departments: View a list of all departments.

- Add Employee: Add a new employee by providing their first name, last name, role, and manager.

- Add Role: Add a new role by specifying the role title, salary, and department ID.

- Add Department: Add a new department by entering a department name.

- Update Employee Role: Update an existing employee’s role by selecting from a list of employees and available roles.

- Delete Employee: Remove an employee from the database.

## Technologies Used

- Node.js: JavaScript runtime for building server-side applications.

- Inquirer: Used to create an interactive command-line interface.

- PostgreSQL: Database for storing employee, role, and department data.

- pg: Node.js library for connecting and querying PostgreSQL databases.

## Walkthrough Video

Click [here](https://drive.google.com/file/d/1mP3t8U9a-kXzkr4xbpmtvd09h6hUx3zG/view?usp=sharing) to watch a walkthrough video of the Employee Tracker application.

## **Support**

In this project, I utilized peer support in the queries.js file. Collaborating with peers helped improve the functionality and user experience of the candidate search feature.

Additionally I used learning assistant generating code for both the index.js and the queries.js files.

## License

This project is licensed under the MIT License.

Author: Judymae Jolibois

GitHub: judymaejolibois

Github Repo Link : https://github.com/judymaej/module10EmployeeTracker

## Additional Notes

If you have any issues running the application or encounter errors with database connectivity, make sure your PostgreSQL server is running and that the database connection settings in queries.js are correct.
