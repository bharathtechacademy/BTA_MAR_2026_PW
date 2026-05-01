//Abstraction is a concept of hiding the implementation. 

abstract class CommonMethods {

    launchApplication(){
        console.log("Launch the browser. ")
        console.log("Enter the URL: www.google.com ")
        console.log("Launch the application. ")
    }

    // loginIntoApplication(){
    //     console.log("Enter the username. ")
    //     console.log("Enter the password. ")
    //     console.log("Click on the login button. ")
    // }

    // logoutFromApplication(){
    //     console.log("Click on the profile icon. ")
    //     console.log("Click on the logout button. ")
    // }


    abstract loginIntoApplication(): void;

    abstract logoutFromApplication(): void;
}


abstract class Test extends CommonMethods{

    // obj = new CommonMethods();

    // loginIntoApplication(){
    //     console.log("Enter the username. ")
    //     console.log("Enter the password. ")
    //     console.log("Click on the login button. ")
    // }

    // logoutFromApplication(){
    //     console.log("Click on the profile icon. ")
    //     console.log("Click on the logout button. ")
    // }

}
