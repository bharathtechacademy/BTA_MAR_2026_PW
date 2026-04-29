//Class with multiple methods related to employee 

class Employee {

   
    //method 1
    printEmployeeDetails(empId: number, empName: string) {
        console.log("Employee Id: " + empId);
        console.log("Employee Name: " + empName);
    }

    //method 2
    printEmployeeProjects(empId: number, empProject: string) {
        console.log("Employee Id: " + empId);
        console.log("Employee Projects: " + empProject);
    }

    //method 3
    printEmployeeRole(empId: number, empRole: string) {
        console.log("Employee Id: " + empId);
        console.log("Employee Role: " + empRole);
    }
}

//Access the methods by creating the object of Employee class. 
let emp = new Employee();

emp.printEmployeeDetails(1234, "Bharath Reddy ");
emp.printEmployeeRole(1234, "Senior SDET ");
emp.printEmployeeProjects(1234, "CREATIO CRM");