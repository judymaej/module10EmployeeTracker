const inquirer = require("inquirer");
const {
  viewEmployees,
  viewRoles,
  viewDepartments,
  addEmployee,
  addRole,
  addDepartment,
  updateEmployeeRole,
  deleteEmployee,
} = require("./db/queries");

// Main menu function
async function mainMenu() {
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "View All Roles",
        "View All Departments",
        "Add Employee",
        "Add Role",
        "Add Department",
        "Update Employee Role",
        "Delete Employee",
        "Exit",
      ],
    },
  ]);

  switch (answer.action) {
    case "View All Employees":
      await viewEmployees();
      break;
    case "View All Roles":
      await viewRoles();
      break;
    case "View All Departments":
      await viewDepartments();
      break;
    case "Add Employee":
      await promptAddEmployee();
      break;
    case "Add Role":
      await promptAddRole();
      break;
    case "Add Department":
      await promptAddDepartment();
      break;
    case "Update Employee Role":
      await promptUpdateEmployeeRole();
      break;
    case "Delete Employee":
      await promptDeleteEmployee();
      break;
    case "Exit":
      console.log("Goodbye!");
      process.exit();
      break;
  }

  mainMenu(); // Loop back to main menu after each action
}

// Prompt function to add a new employee
async function promptAddEmployee() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "firstName",
      message: "Enter the employee’s first name:",
    },
    {
      type: "input",
      name: "lastName",
      message: "Enter the employee’s last name:",
    },
    { type: "input", name: "roleId", message: "Enter the employee’s role ID:" },
    {
      type: "input",
      name: "managerId",
      message: "Enter the employee’s manager ID (or leave blank if none):",
    },
  ]);

  await addEmployee(
    answers.firstName,
    answers.lastName,
    parseInt(answers.roleId),
    answers.managerId ? parseInt(answers.managerId) : null
  );
}

// Prompt function to add a new role
async function promptAddRole() {
  const answers = await inquirer.prompt([
    { type: "input", name: "title", message: "Enter the role title:" },
    { type: "input", name: "salary", message: "Enter the role salary:" },
    {
      type: "input",
      name: "departmentId",
      message: "Enter the department ID for this role:",
    },
  ]);

  await addRole(
    answers.title,
    parseFloat(answers.salary),
    parseInt(answers.departmentId)
  );
}

// Prompt function to add a new department
async function promptAddDepartment() {
  const { departmentName } = await inquirer.prompt([
    {
      type: "input",
      name: "departmentName",
      message: "Enter the department name:",
    },
  ]);

  await addDepartment(departmentName);
}

// Prompt function to update an employee's role
async function promptUpdateEmployeeRole() {
  const employees = await viewEmployees(); // Fetch all employees
  const roles = await viewRoles(); // Fetch all roles

  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "employeeId",
      message: "Select the employee to update:",
      choices: employees.map((emp) => ({
        name: `${emp.first_name} ${emp.last_name}`,
        value: emp.id,
      })),
    },
    {
      type: "list",
      name: "newRoleId",
      message: "Select the new role:",
      choices: roles.map((role) => ({ name: role.title, value: role.id })),
    },
  ]);

  await updateEmployeeRole(answers.employeeId, answers.newRoleId);
}

// Prompt function to delete an employee
async function promptDeleteEmployee() {
  const employees = await viewEmployees(); // Fetch all employees

  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "employeeId",
      message: "Select the employee to delete:",
      choices: employees.map((emp) => ({
        name: `${emp.first_name} ${emp.last_name}`,
        value: emp.id,
      })),
    },
  ]);

  await deleteEmployee(answer.employeeId);
}

// Start the application
mainMenu();
