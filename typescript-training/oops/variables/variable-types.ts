// Variable Types in TypeScript

//There are mainly three different types of variables available in TypeScript. 

//1.Local variables => The variable declared inside the method, and we cannot access it outside of the method. 
//2.Instance variables => The variable is declared outside of the method but within the class, and we can access this particular variable by creating the object of that particular class. 
//3.Static Variables => The variable declared outside of the method Along with the static keyword . We don't need to create an object to access the static variable. Instead, we can directly access by taking reference of the class name. 

class Employee{
    empName:string = "Bharath"; //Instance variable
    static empId:number = 12345;

    printEmployeeDetails(){
        let empSalary:number = 50000; //Local Variable
        console.log("Employee Salary: " + empSalary);
        console.log("Employee Name: " + this.empName);
        console.log("Employee ID: " + Employee.empId);
    }

}

let obj = new Employee();
// console.log(obj.empSalary);
console.log(obj.empName);
console.log(Employee.empId);