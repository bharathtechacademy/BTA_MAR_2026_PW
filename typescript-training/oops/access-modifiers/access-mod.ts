// Access Modifiers in TypeScript 
// Access modifiers are nothing but a set of keywords that we are going to use to control the access of data and methods stored in the classes. 

//1. public/no-keyword ==> We can access this data / method everywhere. 
//2. protected ==> We can access the data or methods either within the class or its sub-classes or child classes only. 
//3. private ==> Can be accessed within the class only. Outside of the class, not allowed. 

//Main Class
class Person {
    //Data members
    public name: string = "Bharath Reddy";
    private age: number = 0;
    protected city: string = "Hyderabad";

    //Method
    printEmpData(): void {
        console.log("******Accessing the data within the class******")
        console.log(this.name);
        console.log(this.age);
        console.log(this.city);
    }

    //Setter and Getter for private data member age
    public setAge(age: number): void {
        this.age = age;
    }

    //
    public getAge(): number {
        return this.age;
    }
}

//Child Class
class Child extends Person {

    //Method
    printEmpData(): void {
        console.log("******Accessing the data within the child class******")
        // console.log(this.name);
        // console.log(this.age);
        // console.log(this.city);
    }
}

//Outsider class
class Outsider {
    //Method
    printEmpData(): void {
        let person = new Person();
        console.log("******Accessing the data within the outsider class******")
        // console.log(person.name);
        console.log(person.getAge());
        // console.log(person.city);
    }
}

let obj1 = new Person();
obj1.printEmpData();
let obj2 = new Child();
obj2.printEmpData();
let obj3 = new Outsider();
obj3.printEmpData();
