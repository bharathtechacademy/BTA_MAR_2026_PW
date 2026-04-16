//Syntax to store the data in TypeScript : Declaration  variable : DataType = Data ;

//Data types in TypeScript are divided into two different categories. 

//1. Primitive data types
//2. Non-primitive data types


/***********************************************/
/*********Primitive Data Types******************/
/***********************************************/

//1. number => number datatype represents the number with decimals, without decimals. Stored without quotations. 
let num1: number = 10;
let num2: number = 10.55;
console.log(num1);
console.log(num2);

//2.string ==> The data type that can help us to store text values. We can use single or double quotes or backticks.
let str1: string = "He told me, 'Good morning.'";
let str2: string = 'I replied back with "Good afternoon." ';
console.log(str1);
console.log(str2);

//3.boolean => The data type that can help us to store the result of a condition in the form of true or false 
let x: number = 10;
let y: number = 20;
let result: boolean = x > y;
console.log(result);

//4.undefined => Undefined represents a variable that has been declared but not assigned any value. 
let age: undefined;
console.log(age);

//null => Null represents a variable that has been declared and intentionally assigned an empty value. 
let salary: null = null
console.log(salary);

//union => Union represents more than one data type within the variable. 
let empAddress: string | number | boolean = "Hyderabad";
console.log(empAddress);
empAddress = "Telanagna";
console.log(empAddress);
empAddress = 500081;
console.log(empAddress);

//any => any represents any data type is allowed within the variable. 
let data: any = "Hello World";
console.log(data);
data = 100;
console.log(data);
data = true;
console.log(data);

/****************************************************/
/*******NON-PRIMITIVE DATA TYPES IN TYPESCRIPT*******/
/****************************************************/

//1.object => Object data type represents a collection of key-value pairs. 
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

//Array => Array represents a list of values. 
let fruits: string[] = ["apple", "banana", "orange", "mango"];
let prices: number[] = [300, 80, 200, 220];
let fruitsAndPrices: (string | number)[] = ["apple", 300, "banana", 80, "orange", 200, "mango", 220];

//tuple => tuples represents a list of values in specific order

//Array :

//Store employee name, employee phone number, and employee visa status within the array. 
let empDetails: (string | number | boolean)[] = ["bharath", true, 9988776655,"bharath"];

//tuples :
//Store employee name, employee phone number, and employee visa status within the array. 
let empInfo: [string, number, boolean] = ["bharath", 9988776655, true];


//function => A function represents a block of code or collection of statements to complete a particular task. 
// Test Case 3: verify the account statement
function launchBrowserAndLogin(browser_name:string, url:string) :void{
    console.log(`Launch the ${browser_name} Browser`);
    console.log(`Enter the URL: ${url}`);
    console.log("Enter the username as 'Bharath' and password as 'Bharath@123'");
    console.log("Click on the login button");
}

function logoutAndCloseBrowser():void {
    console.log("Logout from the application");
    console.log("Close the browser");
}

function getAccountBalance():number {
    console.log("Navigate to the account balance page");
    let accountBalance :number= 100000;
    return accountBalance;
}


// Set => A set represents a collection of unique values of any data type. 
let empIds :Set<number> = new Set(); //creating the empty set will store the data. 
empIds.add(121);
empIds.add(122);
empIds.add(123);
empIds.add(123);
empIds.add(124);

console.log(empIds);

//Map => A map can store multiple values in the form of key-value. When it comes to a map, it is going to allow duplicate values but won't allow duplicate keys. 
let empMap :Map<string,string|number>= new Map();
empMap.set("empId", 121);
empMap.set("empName", "Bharath");
empMap.set("empAge", 36);
empMap.set("empId", 122);//duplicate key
empMap.set("empLuckyNumber", 36);//duplicate value
console.log(empMap);

//Date => The date data type represents a specific point in time.
let currentDate = new Date();
console.log(currentDate);

//get current year
console.log(currentDate.getFullYear());

//get current month
console.log(currentDate.getMonth() + 1); // month starts from 0 to 11

//get current date
console.log(currentDate.getDate());

//get current day
console.log(currentDate.getDay()); // day starts from 0 to 6 (0-Sunday, 1-Monday, 2-Tuesday, 3-Wednesday, 4-Thursday, 5-Friday, 6-Saturday)

//get current hours
console.log(currentDate.getHours());

//get current minutes
console.log(currentDate.getMinutes());

//get current seconds
console.log(currentDate.getSeconds());