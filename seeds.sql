-- Insert departments
INSERT INTO department (name) VALUES 
('Engineering'), 
('Sales'), 
('Marketing');

-- Insert roles
INSERT INTO role (title, salary, department_id) VALUES 
('Manager', 60000, 1),
('Developer', 55000, 1),
('Salesperson', 50000, 2),
('Marketer', 45000, 3);

-- Insert employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('John', 'Doe', 1, NULL),
('Jane', 'Smith', 2, 1),
('Alice', 'Johnson', 3, NULL),
('Bob', 'Brown', 4, 3);
