//Exception Handling => Handle the exceptions. 

//Handling the exceptions, meaning whenever there is an exception, I want to ignore those exceptions and I want to avoid the failures by using some techniques. 
//When there is no exception, the program is running fine, but intentionally I want to throw an exception and fail the program. 

//try-catch-finally =>Whenever there is any exception and if you want to handle the exception and continue the execution process without getting failures 
//throw an custom exception. => When there is no exception, but the user intentionally wants to fail the program as it is not meeting the expected requirement criteria 


// try{
//     //Try to execute the main code. 
// }catch(error){
//     //Handle the exception and run the alternate code.
// }finally{
//     //This block will be executed irrespective of the exception is there or not. 
//     //This block is used to do some clean up activity. 
// }

let input: any;


try {
    console.log(input.toLowerCase());
} catch (error) {
    console.log("Alternate code is executed. ");
    console.log(input.toUpperCase());
} finally {
    console.log("Execution completed");
}

