// Import the pg module
const { Pool } = require("pg");

// Create a new pool instance to manage connections to the database
const pool = new Pool({
  user: "judymaejolibois",
  host: "localhost",
  database: "company_db",
  port: 5432,
});

// Function to view all employees
async function viewEmployees() {
  try {
    const query = `
      SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, 
             manager.first_name AS manager 
      FROM employee 
      LEFT JOIN role ON employee.role_id = role.id 
      LEFT JOIN department ON role.department_id = department.id 
      LEFT JOIN employee manager ON employee.manager_id = manager.id;
    `;
    const result = await pool.query(query);
    console.table(result.rows);
    return result.rows;
  } catch (err) {
    console.error("Error viewing employees:", err);
  }
}

// Function to view all roles
async function viewRoles() {
  try {
    const query = `
      SELECT role.id, role.title, department.name AS department, role.salary 
      FROM role 
      LEFT JOIN department ON role.department_id = department.id;
    `;
    const result = await pool.query(query);
    console.table(result.rows);
    return result.rows;
  } catch (err) {
    console.error("Error viewing roles:", err);
  }
}

// Function to view all departments
async function viewDepartments() {
  try {
    const query = `SELECT * FROM department;`;
    const result = await pool.query(query);
    console.table(result.rows);
    return result.rows;
  } catch (err) {
    console.error("Error viewing departments:", err);
  }
}

// Function to add a new employee
async function addEmployee(firstName, lastName, roleId, managerId) {
  try {
    const query = `
      INSERT INTO employee (first_name, last_name, role_id, manager_id)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    const result = await pool.query(query, [
      firstName,
      lastName,
      roleId,
      managerId,
    ]);
    console.log(`Employee ${firstName} ${lastName} added successfully.`);
    return result.rows[0];
  } catch (err) {
    console.error("Error adding employee:", err);
  }
}

// Function to add a new role
async function addRole(title, salary, departmentId) {
  try {
    const query = `
      INSERT INTO role (title, salary, department_id)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const result = await pool.query(query, [title, salary, departmentId]);
    console.log(`Role "${title}" added successfully.`);
    return result.rows[0];
  } catch (err) {
    console.error("Error adding role:", err);
  }
}

// Function to add a new department
async function addDepartment(name) {
  try {
    const query = `
      INSERT INTO department (name)
      VALUES ($1)
      RETURNING *;
    `;
    const result = await pool.query(query, [name]);
    console.log(`Department "${name}" added successfully.`);
    return result.rows[0];
  } catch (err) {
    console.error("Error adding department:", err);
  }
}

// Function to update an employee's role
async function updateEmployeeRole(employeeId, newRoleId) {
  try {
    const query = `
      UPDATE employee
      SET role_id = $1
      WHERE id = $2
      RETURNING *;
    `;
    const result = await pool.query(query, [newRoleId, employeeId]);
    if (result.rowCount === 0) {
      console.log(`No employee found with ID ${employeeId}.`);
    } else {
      console.log("Employee role updated successfully.");
    }
    return result.rows[0];
  } catch (err) {
    console.error("Error updating employee role:", err);
  }
}

// Function to delete an employee
async function deleteEmployee(employeeId) {
  try {
    const query = `
      DELETE FROM employee
      WHERE id = $1
      RETURNING *;
    `;
    const result = await pool.query(query, [employeeId]);
    if (result.rowCount === 0) {
      console.log(`No employee found with ID ${employeeId}.`);
    } else {
      console.log(`Employee with ID ${employeeId} deleted successfully.`);
    }
    return result.rows[0];
  } catch (err) {
    console.error("Error deleting employee:", err);
  }
}

// Export all functions
module.exports = {
  viewEmployees,
  viewRoles,
  viewDepartments,
  addEmployee,
  addRole,
  addDepartment,
  updateEmployeeRole,
  deleteEmployee, // Ensure deleteEmployee is exported
};
