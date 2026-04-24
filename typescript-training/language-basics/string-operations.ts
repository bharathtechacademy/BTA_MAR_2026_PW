//String : String is nothing but a collection of characters. In TypeScript, we can use single quotes (' '), double quotes (" "), or backticks (` `) to define a string.

//Example of string declaration
let firstName: string = "John";
let lastName: string = 'Doe';
let fullName: string = `My name is ${firstName} ${lastName}.`;
console.log(fullName); // Output: My name is John Doe.

/*****************************String Methods***************************/

//1. Storing string in a variable 
console.log("1. Storing string in a variable ");
let originalString: string = " Username : Admin | Password : admin123 ";
console.log(originalString); // Output:  Username : Admin | Password : admin123

//2. Method to Calculate the total number of characters available in the string. =>string.length()
console.log("2. Calculate the total number of characters available in the string");
let stringLength: number = originalString.length;
console.log(`Total number of characters: ${stringLength}`); 

//3. Method to get the specific character from the string at a specific index => string.charAt(index)
console.log("3. Get the specific character from the string at a specific index");
let charAtIndex5: string = originalString.charAt(5);
console.log(`Character at index 5: ${charAtIndex5}`); 

//Reverse the string that should print each and every character of the string in reverse order. 
let reversedString:string ="";
for(let i:number= stringLength-1 ;i>=0 ;i--){
    reversedString =reversedString+originalString.charAt(i);
}
console.log(reversedString);

//4. Removing the unwanted spaces from the string => string.trim()
console.log("4. Removing the unwanted spaces from the string");
console.log(`"${originalString}"`);
console.log(`"${originalString.trim()}"`);

//5. Remove all the spaces from the string. => string.replace(/old-char/g, new-char)
console.log("5. Remove all the spaces from the string.");
console.log(`"${originalString}"`);
console.log(`"${originalString.replace(/ /g,"")}"`);

//6. Remove all the alphabets from the string. => string.replace(/[reg-exp]/g, new-char)
console.log("6. Remove all the alphabets from the string.");
console.log(`"${originalString}"`);
console.log(`"${originalString.replace(/[a-zA-Z]/g,"")}"`);

//7. Remove all the numbers from the string. => string.replace(/[reg-exp]/g, new-char)
console.log("7. Remove all the numbers from the string.");
console.log(`"${originalString}"`);
console.log(`"${originalString.replace(/[0-9]/g,"")}"`);

//8. Remove all the special characters from the string. => string.replace(/[reg-exp]/g, new-char)
console.log("8. Remove all the special characters from the string.");
console.log(`"${originalString}"`);
console.log(`"${originalString.replace(/[^a-zA-Z0-9]/g,"")}"`);

//9. Convert the string into uppercase. => string.toUpperCase()
console.log("9. Convert the string into uppercase.");
console.log(`"${originalString}"`);
console.log(`"${originalString.toUpperCase()}"`);

//10. Convert the string into lowercase. => string.toLowerCase()
console.log("10. Convert the string into lowercase.");
console.log(`"${originalString}"`);
console.log(`"${originalString.toLowerCase()}"`);

//11. Method to extract specific part of the string by using indexes => string.substring(startIndex, endIndex+1)
console.log("11. Extract specific part of the string by using indexes");
let username: string = originalString.substring(12, 17);
console.log(`Extracted username: ${username}`); // Output: Admin
let password: string = originalString.substring(31, 39);
console.log(`Extracted password: ${password}`); // Output: admin123

//12. Method to extract the text from the dynamic string  => Split and extract particular parts. => string.split(delimiter)
console.log("12. Extract the text from the dynamic string");
let splitString: string[] = originalString.split(" ");
console.log(splitString); // Output: [ 'Username', ':', 'Admin', '|', 'Password', ':', 'admin123' ]
let extractedUsername: string | undefined = splitString[3];
let extractedPassword: string | undefined = splitString[7];
console.log(`Extracted username: ${extractedUsername}`);
console.log(`Extracted password: ${extractedPassword}`);

//13. Methods to compare two different strings 
console.log("13. Compare two different strings");
//== (loose equality) (i.e. it checks only the value of the string)
//=== (strict equality) (i.e. it checks both the value and the type of the string)
//includes() (i.e. it checks if a string contains a specified substring)
//startsWith() (i.e. it checks if a string starts with a specified substring)
//endsWith() (i.e. it checks if a string ends with a specified substring)
let string1: string = "100";
let string3: number | string = "100";
console.log(string1 == string3); // Output: true
console.log(string1 === string3); // Output: true
let string2: string = "Hello World";
console.log(string2.includes("World")); // Output: true
console.log(string2.startsWith("Hello")); // Output: true
console.log(string2.endsWith("World")); // Output: true

//14. Data Conversions : Method to convert string to a number and vice versa => string(other-datatype)
console.log("14. Data Conversions : Method to convert string to a number and vice versa ");
let stdCode:number = 123;
let phone:number = 456789;
let std:string = String(stdCode);
console.log(std+phone);

//Converting string to other data types 
let balance: string = "Account balance is $19,999.99";
balance = balance.replace(/[^0-9.]/g,"");
let bal :number = parseFloat(balance);
console.log(bal>=10000);