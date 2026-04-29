//Class with multiple methods related to employee 

class Employee {

    //Declare a common parameter at class level. 
    empId: number;

    //Creating the constructor with a parameter to update common parameter value 
    constructor(id: number) {
        this.empId = id;
    }

    //method 1
    printEmployeeDetails(empName: string) {
        console.log("Employee Id: " + this.empId);
        console.log("Employee Name: " + empName);
    }

    //method 2
    printEmployeeProjects(empProject: string) {
        console.log("Employee Id: " + this.empId);
        console.log("Employee Projects: " + empProject);
    }

    //method 3
    printEmployeeRole(empRole: string) {
        console.log("Employee Id: " + this.empId);
        console.log("Employee Role: " + empRole);
    }
}

//Access the methods by creating the object of Employee class. 
let emp = new Employee(1234);

emp.printEmployeeDetails("Bharath Reddy ");
emp.printEmployeeRole("Senior SDET ");
emp.printEmployeeProjects("CREATIO CRM");