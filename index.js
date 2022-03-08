const inquirer = require("inquirer");
//below brings in only prompt method
// const {prompt} = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// const Employee = require("./lib/Employee");

const employees = [];

const questionsMgmt = [
  {
    type: "input",
    message: "Team manager name:",
    name: "name",
  },
  {
    type: "input",
    message: "Manager ID:",
    name: "id",
  },
  {
    type: "input",
    message: "Manager email:",
    name: "email",
  },
  {
    type: "input",
    message: "Manager office number:",
    name: "officeNum",
  },
];

const employeePrompt = [
  {
    type: "list",
    message: "Add another employee:",
    name: "role",
    choices: ["Engineer", "Intern"],
  },
  {
    //callback function can access previous answers in prompt
    message: (answers) => `${answers.role} name:`,
    name: "name",
  },
  {
    message: (answers) => `${answers.role} ID:`,
    name: "id",
  },
  {
    message: (answers) => `${answers.role} email:`,
    name: "email",
  },
  {
    message: (answers) => {
      if (answers.role === "Engineer")
        return "What is the github name of the engineer?";
      return "From which school did this intern graduate?";
    },
    name: "extra",
  },
];

function addEmployee() {
  inquirer
    .prompt({
      message: "What do you want to do?",
      type: "list",
      name: "choice",
      choices: ["Add employee", "Create roster"],
    })
    .then((data) => {
      console.log("YOUR Choice --- ", data.choice);
      if (data.choice === "Add employee") {
        inquirer.prompt(employeePrompt).then((data) => {
          console.log("answers for employee --- ", data);
          if (data.role === "Engineer") {
            const emp = new Engineer(
              data.name,
              data.id,
              data.email,
              data.extra
            );
            employees.push(emp);
          } else {
            const emp = new Intern(data.name, data.id, data.email, data.extra);
            employees.push(emp);
          }

          console.log(`${data.role} added to Team!`);
          setTimeout(addEmployee, 2000);
        });
      } else {
        createHTML();
      }
    });
}

function createHTML() {
  console.log("Creating HTML...");
  console.log("All Employees ---- ", employees);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link
href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
rel="stylesheet"
integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
crossorigin="anonymous"
/>
<link rel="stylesheet" href="" />
<style>
.card {
box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
rgba(0, 0, 0, 0.22) 0px 10px 10px;
}
</style>
<title>Team Profile</title>
</head>
<body>
<nav class="navbar navbar-light bg-danger bg-gradient">
<div class="container-fluid">
<h1 class="navbar-brand my-4 mx-auto fs-2 text-white">My Team</h1>
</div>
</nav>
<div class="row p-5">
${employees
  .map((employee) =>
    employee.generateHTMLCard(
      employee.officeNum || employee.github || employee.school
    )
  )
  .join("\n")}
</div>
</body>
</html>`;
  fs.writeFile("./dist/output.html", html, (err) =>
    err
      ? console.error(err)
      : console.log("Team Profile page has been written!")
  );
}

function init() {
  inquirer.prompt(questionsMgmt).then((response) => {
    console.log(response);
    // console.log(response.json());
    //create new manager using info from prompt
    const manager = new Manager(
      response.name,
      response.id,
      response.email,
      response.officeNum
    );
    employees.push(manager);
    //invoke functin to create new employees
    addEmployee();
  });
}
init();
