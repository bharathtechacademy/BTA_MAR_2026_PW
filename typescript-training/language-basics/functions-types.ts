//Function in TypeScript => A function is ablock of code or a collection of statements to complete a specific task. 

//There are mainly three different types of functions available in TypeScript. 

//1. Named functions 
//2. Anonymous functions
//3. Arrow functions


//1. Named functions => The functions declared explicitly with some name are called named functions.

//Syntax of named function
// function functionName(parameters): returnType {
//     //function body
// }

//Example of named function
function launchBrowserAndLogin(browser_name:string, url:string) :void{
    console.log(`Launch the ${browser_name} Browser`);
    console.log(`Enter the URL: ${url}`);
    console.log("Enter the username as 'Bharath' and password as 'Bharath@123'");
    console.log("Click on the login button");
}

//2. Arrow function / Lambda Function => The function is declared without any name, and the implementation will be written using an arrow mark. 

//Syntax of arrow function
// let functionName = (parameters): returnType => {
//     //function body
// }

//Regular function to calculate the sum of two numbers. 
function add(a:number, b:number):number {
    let c:number = a+b;
    return c;
}

//Arrow function to calculate the sum of two numbers 
let sum = (a:number,b:number)=> a+b;
let square = (a:number) => a*a;

console.log(add(1,2));
console.log(sum(1,2));
console.log(square(3));

//3. Anonymous function => The function is declared without any name,Anonymous functions will be used as a parameter of other functions. 
//Syntax of anonymous function
// function(functionName): returnType {
//     //function body
// }

//Example of anonymous function as parameter to another function
function mainFunction(square : (a:number)=> number):void {
    console.log(square(2));
}

//normal function to calculate the square of a number
function mainFunction2(a:number):void {
    console.log(a*a);
}


//calling function
 mainFunction(
    //anonymous function as parameter
    function(a:number):number {
        return a/a;
    }

 );

 //calling function
    mainFunction2(400);