//Create Employee class to store employee ID, employee name, and employee project details. 
class Employee {

    //default constructor
    constructor(){
        
    }

    //storing data inside class
    empId : number = 1234;
    empName: string = "Bharath";

    //storing method inside class
    empProjectDetails() : void {
        console.log("Employee project details are: TypeScript Training");
    }

}

//Access the data from the class. 
let obj = new Employee(); // new + constructor() => object

console.log(obj.empId);
console.log(obj.empName);
obj.empProjectDetails();