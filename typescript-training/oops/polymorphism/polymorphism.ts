//Polymorphism is a concept of having one single method with different implementations. 

//In other languages, we usually have two different types of polymorphism concepts. 

//1. Compile time polymorphism (Method overloading)
//2. Runtime polymorphism (Method overriding)

//In TypeScript, we can achieve only runtime polymorphism using method overriding.

//1. Compile time polymorphism (Method overloading)
//Creating multiple methods within the same class with the same name but different parameters is called method overloading.


//2. Runtime polymorphism (Method overriding)
//Creating multiple methods with the same name with the same parameters between parent and child classes with different implementations is called method overriding.

class Calculator {

    // add(a: number, b: number): number{
    //     return a + b;
    // }

    // add(a: string, b: string): string{
    //     return a + b;
    // }    

    add(a: any, b: any): any {
        return a + b;
    }


}

class AdvancedCalculator extends Calculator {

    add(a: any, b: any): any {
        return "Answer is " + (a + b);
    }

}

// let obj = new Calculator();
// console.log(obj.add(1, 2));

let advObj = new AdvancedCalculator();
console.log(advObj.add(1, 2));