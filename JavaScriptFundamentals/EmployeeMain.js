const { Employee } = require("./EmployeeBl");

let employee = new Employee();
 employee._id = 100;
 employee._salary = 1000.0;
 employee._name = "Arjun";
 employee._gender = "male"
 employee._department = "frontend";

 console.log (employee.toString());