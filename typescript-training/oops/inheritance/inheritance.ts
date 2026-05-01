//Inheritance : Inheritance is the concept of extending parent class properties into child class, without creating an object

//Inheritance can happen in four different ways. 

// 1.Single inheritance => Child extending parent class properties 
// 2.Multiple inheritance => Child class extending properties of more than one parent class.
// 3.Hierarchical inheritance ==> More than one child class extending properties of a single parent class.
// 4.Multilevel inheritance ==> Child class is extending properties of parent class. Parent is extending properties of grandparent class. 


class Class1 {
    empId : number = 1234;
}

//Parent class 
class Class2 extends Class1{
    empName : string = "Bharath Reddy. ";
}

//Child Class 1
class Class3 extends Class2{
    empSalary:number = 200000;
}

//Child Class 2
class Class4 extends Class2{
    empSalary:number = 200000;
}

let emp = new Class3();
console.log(emp.empName);
console.log(emp.empSalary);