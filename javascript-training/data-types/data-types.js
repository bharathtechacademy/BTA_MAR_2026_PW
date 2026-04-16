//Syntax to Store Data: Declaration variable = data ;

//Data types in JavaScript are divided into two different categories. 
//1. Primitive Data Types (immutable data types)
//2. Non-Primitive Data Types (mutable data types)

//immutable 
let a = 10;//storing number
a + 10;//adding 10
console.log(a);

//mutable
let b = [1, 2, 3];//storing array
b.push(4);
console.log(b);


/********************************************/
/*********Primitive Data Types**************/
/*******************************************/

//1.number ==> The data type that can help us to store numbers with decimals or without decimals
let num1 = 10;
let num2 = 10.55;
console.log(num1);
console.log(typeof num2);
console.log(typeof num2);

//2.string ==> The data type that can help us to store text values. We can use single or double quotes or backticks.
let str1 = "He told me, 'Good morning.'";
let str2 = 'I replied back with "Good afternoon." ';
console.log(str1);
console.log(typeof str1);
console.log(str2);
console.log(typeof str2);

let empName = "Viji";
let location = "TN";
console.log("New Employee Name is " + empName + " and Location is " + location);
console.log(`New Employee Name is ${empName} and Location is ${location}`);

//boolean => The data type that can help us to store the result of a condition in the form of true or false 
let x = 10;
let y = 20;
let result = x > y;
console.log(result);
console.log(typeof result);

//undefined => Undefined represents a variable that has been declared but not assigned any value. 
let age;
console.log(age);

//null => Null represents a variable that has been declared and intentionally assigned an empty value. 
let salary = 100000;
salary = null;
console.log(salary);

//symbol =>  Symbol represents a unique hidden identifier inside an object.
let countryOfOrigin = Symbol();
let productInfo = {
    productName: "IPhone 16",
    price: 100000,
    [countryOfOrigin] : "China"
}
console.log(productInfo);

/***********************************************/
/*********Non-Primitive Data Types**************/
/***********************************************/

//1.object => Object data type represents a collection of key-value pairs. 
let person = {
    name: "bharath",
    age: 36,
    visaStatus: true,
    address: {
        city: "hyd",
        state: "TS",
        zip: 500081
    }
}

//Print the name of the person. 
console.log(person.name);//method 1
console.log(person["name"]);//method 2

//Print the city of the person. 
console.log(person.address.city);//method 1
console.log(person.address["city"]);//method 2

//Print the complete person details. 
console.log(person);

//Array => Array represents a list of values. 
let fruits = ["apple", "banana", "orange", "mango"];
let prices = [300, 80, 200, 220];
let fruitsAndPrices = ["apple",300, "banana",80, "orange",200, "mango",220];

//print mango from fruits
console.log(fruits[3]);

//print price of banana from fruitsAndPrices
console.log(fruitsAndPrices[3]);


//function => A function represents a block of code or collection of statements to complete a particular task. 
// Test Case 3: verify the account statement
console.log("******************TEST CASE 3: VERIFY THE ACCOUNT STATEMENT******************");
launchBrowserAndLogin("firefox", "https://uat.icici.com/");
console.log("Verify the home page is displayed");
console.log("Navigate to the account statement page");
console.log("Verify the account statement is displayed with the following details:");
logoutAndCloseBrowser();

function launchBrowserAndLogin(browser_name, url) {
    console.log(`Launch the ${browser_name} Browser`);
    console.log(`Enter the URL: ${url}`);
    console.log("Enter the username as 'Bharath' and password as 'Bharath@123'");
    console.log("Click on the login button");
}

function logoutAndCloseBrowser() {
    console.log("Logout from the application");
    console.log("Close the browser");
}

function getAccountBalance() {
    console.log("Navigate to the account balance page");
    let accountBalance = 100000;
    return accountBalance;
}

// Set => A set represents a collection of unique values of any data type. 
let empIds = new Set(); //creating the empty set will store the data. 
empIds.add(121);
empIds.add(122);
empIds.add(123);
empIds.add(123);
empIds.add(124);

console.log(empIds);

//Map => A map can store multiple values in the form of key-value. When it comes to a map, it is going to allow duplicate values but won't allow duplicate keys. 
let empMap = new Map();
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