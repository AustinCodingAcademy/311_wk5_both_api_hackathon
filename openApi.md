openapi: 
info: 
  title: API Hackathon

EXPRESS STATIC PUBLIC
const express = require('express');
const app = express()

Listening on PORT || 4001
const port = process.env.PORT || 4001;

CREATE CONNECTION
Connected to Google Cloud Database &
MYSQL Shell 
Set Employees as Default Schema
const mysql = require('mysql');
Connection class, this.pool
   connectionLimit: 100,
        host: '34.66.47.15',
        user: 'root',
        password: '342819',
        database: 'employees'

REQUIRE BODY PARSER
const parser = require('body-parser')
app.use(parser.json())

paths: 
http://localhost:4001/employees: 
    get:
      operationId: getEmployees
        '200':
          description: employees from database * LIMIT 50
    err: 
      500: "Something went wrong!"
    required: true
    schema:
      type: string

paths: 
http://localhost:4001/employees/:emp_no
Example: http://localhost:4001/employees/10001
    get:
      operationId: getEmployeesByEmp_no
        '200':
          description: employee by emp_no
    err: 
      500: "Something went wrong!"
    required: true
    schema:
      type: string

paths: 
http://localhost:4001/employees/firstname/:first_name
Example: http://localhost:4001/employees/firstname/georgi
    get:
      operationId: getEmployeesByFirstName
        '200':
          description: employees by first_name
    err: 
      500: "Something went wrong!"
    required: true
    schema:
      type: string

paths: 
http://localhost:4001/employees/salaries/:emp_no
Example: http://localhost:4001/employees/salaries/10001
    get:
      operationId: getEmployeesSalaries
        '200':
          description: employees salaries by emp_no
    err: 
      500: "Something went wrong!"
    required: true
    schema:
      type: string

paths: 
http://localhost:4001/employees/departments/:dept_name
Example: http://localhost:4001/employees/departments/finance
    get:
      operationId: getEmployeesDepartmentManager
        '200':
          description: employees department by department name
    err: 
      500: "Something went wrong!"
    required: true
    schema:
      type: string
    
paths: 
http://localhost:4001/employees/departments/:dept_name/:dept_no
Example: http://localhost:4001/employees/departments/marketing/d001
    get:
      operationId: getEmployeesDepartment
        '200':
          description: employees department by dept_name and dept_no
    err: 
      500: "Something went wrong!"
    required: true
    schema:
      type: string

  