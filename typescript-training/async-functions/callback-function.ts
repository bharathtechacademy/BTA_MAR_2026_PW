//Function to get the sum of unlimited numbers based on the input from 1 to given number
function sumOfNumbers(input:number): number {
    let sum = 0;
    for (let i = 1; i <= input; i++) {
        sum += i;
    }
    return sum;
}


//Callback function to display the result
console.log("Start up the program. Please wait...");
console.log("Step 1 Executed");
console.log("Step 2 Executed");
console.log("Step 3 Executed");
setTimeout(()=>{
    console.log(sumOfNumbers(10000000000));
},3000);
console.log("Step 5 Executed");
console.log("Step 6 Executed");
console.log("Program execution completed.");
//wait for 3 sec
//then call the function 