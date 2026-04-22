//Function Implementations

//There are multiple ways that we can implement any function to complete a specific task. 

//1. Function without parameters and without return type 
//Creating a function, it is not at all going to take any input parameter, and also it is not going to give you any output. Always we are going to use void as return type
function greet(): void {
    console.log("Hello, Buddy!");
}

//calling the function
greet();

//2. Function with parameters and without return type
//Creating a function, it is going to take some input parameter, but it is not going to give you any output. Always we are going to use void as return type
function greetPerson(name: string): void {
    console.log(`Hello, ${name}!`);
}

//calling the function
greetPerson("Alice");

//3. Function with parameters and with return type
//Creating a function, it is going to take some input parameter, and it is also going to give you some output. We need to specify the return type of the function.
function add(a: number, b: number): number {
    return a + b;
}

//calling the function
const sum = add(5, 10);
console.log(`The sum is: ${sum}`);

//4. Function without parameters and with return type
//Creating a function, it is not going to take any input parameter, but it is going to give you some output. We need to specify the return type of the function.
function getGreeting(): string {
    return "Hello, Buddy!";
}

//calling the function
const greeting = getGreeting();
console.log(greeting);

//5. Function with optional parameters
//Creating a function, it is going to take some input parameter, but it is not mandatory to provide that parameter. We can use the ? symbol to denote an optional parameter.
function printPersonDetails(name: string, age ?: number): void {
    if(age){
        console.log(`Name: ${name}, Age: ${age}`);
    }else{
        console.log(`Name: ${name}`);
    }
}

//calling the function
printPersonDetails("Bharath", 35);
printPersonDetails("Bharath");

//6. Function with default parameters 
//Creating a function, it is going to take some input parameters, and for some of the parameters we are going to add a default value so that if the user is not going to update any value while calling the function, it is going to use the default value always. 

function printEmpDetails(name:string, visaStatus:boolean=false):void{
    console.log (`Name: ${name}, Visa Status is : ${visaStatus}`)
}

printEmpDetails("Bharath", true);
printEmpDetails("Bharath");

//7. Function with rest parameters
//Creating a function, it is going to take some input parameters, but we are not sure about the number of parameters that we are going to pass while calling the function. We can use the rest parameter syntax to denote that we can pass any number of parameters while calling the function.
function sumOfNumbers(...numbers: number[]): number {
let sum:number = 0;
for(let num of numbers){
    sum += num;
}
return sum;
}

//calling the function
console.log(`The sum of numbers is: ${sumOfNumbers(1, 2, 3, 4, 5)}`);
console.log(`The sum of numbers is: ${sumOfNumbers(1, 2)}`);
console.log(`The sum of numbers is: ${sumOfNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)}`);