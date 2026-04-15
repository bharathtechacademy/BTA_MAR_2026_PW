//Syntax to store data in JS : Declaration Variable = Data ;

//In JavaScript, we can declare the variables by using three different keywords. 

//1.var (avoided in modern JavaScript)
//2.let (used for variables that can be reassigned)
//3.const (used for constant values that cannot be reassigned)

//These three different variable declarations will differ mainly based on the four important parameters. 

//1. Initialization 
//2. Reassignment
//3. Re-declaration
//4. Scope

//1. Initialization ==> Initialization, meaning adding the value at the time of declaration 
var a; //It is not mandatory to initialize at the beginning. You can add later as well. 
let b; //It is not mandatory to initialize at the beginning. You can add later as well. 
const c = 10; //It is mandatory to initialize the value at the beginning. 

//2. Reassignment ==> Changing the value later 
a = 10; //var will allow reassignment
b = 20; //let also allow reassignment
//c = 30; //constant won't allow reassignment. 

//3. Re-declaration => Using the same variable to store different data. 
var a = "Bharath"; //Redeclaration is possible when it comes to var
// let b ="Sarath"; //Re-declaration is not possible. 
// const c ="Hayath"; //Re-declaration is not possible. 

//4. Scope => Scope is all about where we can use this data. 

//let and const are block-scoped. 
//var is not block-scoped.

{
    let x = 100;
    const y = 200;
    var z = 500;
    // console.log(x);
    // console.log(y);
    // console.log(z);
}



    // console.log(x);
    // console.log(y);
    console.log(z);