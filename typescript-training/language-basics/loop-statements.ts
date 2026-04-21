//Loop Statements : Loop the statements or execute the same statement multiple times. 

//Before Loop Statements

let name: string = "Bharath";
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);

//Loop statements are mainly two different categories. 

//1. for loop => When we know the total number of iterations to be executed before itself 
//2. while loop => When we don't know the total number of iterations to be executed before


//1. for loop 
//Syntax : for(condition-to-start; condition-to-end; increment/decrement) {
//  //statements to be executed
//}

for (let i: number = 1; i <= 1000; i++) {
    console.log(`${i} . ${name}`);
}

//2. while loop => When we don't know the total number of iterations to be executed before
//syntax: 
// while(condition-to-begin){
//      //statements to be executed
// }


let j: number = 1;
let isPageLoaded: boolean = false;

while (j > 0) {
    if (isPageLoaded || j > 5) {
        break; //break the loop
    }
    console.log("Refresh The Page");
    j++;
}


//Special Cases of Loops 

//1. for...of loop ==> For-of loop will be used to iterate over a predefined list-like array. 
//2. for...in loop ==> For-in loop will be used to iterate over the properties of an object.
//3. do...while loop ==> Do-while loop will be used to execute the statements at least once, even when the condition is false. 

//1. for...of loop

//Array => Array represents a list of values. 
let fruits: string[] = ["apple", "banana", "orange", "mango"];

//normal for loop
for (let i: number = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//for...of loop ==> Each and every value of the given list 
for (let fruit of fruits) {
    console.log(fruit);
}

//2. for...in loop ==> For-in loop will be used to iterate over the properties of an object.
interface personInfo {
    name: string,
    age: number,
    visaStatus: boolean,
    address: {
        city: string,
        state: string,
        zip: number
    }
}

let person: personInfo = {
    name: "bharath",
    age: 36,
    visaStatus: true,
    address: {
        city: "hyd",
        state: "TS",
        zip: 500081
    }
}

//for ...in loop ==> Each and every property of the given object
for (let key in person) {
    console.log(key);
    console.log(person[key as keyof personInfo]);
}

//3. do...while loop ==> Do-while loop will be used to execute the statements at least once, even when the condition is false.
//syntax: 
// do{
//      //statements to be executed
// }while(condition-to-begin)

let x: number = 0;

do {
    console.log("Refresh The Page");
    x++;
}while (x > 0 );


