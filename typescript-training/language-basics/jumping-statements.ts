// Jumping Statements in Loops

//1. break => Break the loop and come out of the loop
//2. continue => Skip the current iteration and move to the next iteration

for (let i: number = 1; i <= 10; i++) {
    if (i === 5) {
       // break; //Stop the execution and come out of the loop. 
        continue; // Stop the current iteration and move to the next iteration. 
    }
    console.log(i)
}