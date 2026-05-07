//Regular variables versus read-only variables 

//Regular variable

class Employee {
    readonly empId: number = 1234;
    empName: string = "John Doe";

    updateAndDisplayEmpDetails() {
        this.empId = 5678; // Error: Cannot assign to 'empId' because it is a read-only property.
        this.empName = "Jane Doe"; // Allowed: empName is not read-only
        console.log(`Employee ID: ${this.empId}, Employee Name: ${this.empName}`);
    }
}

let emp = new Employee();
emp.updateAndDisplayEmpDetails();