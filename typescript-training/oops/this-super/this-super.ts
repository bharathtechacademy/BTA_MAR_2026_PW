//Create sample parent class. 
class Parent {

    //Parent Class Value
    course: string = "JavaScript";

    printProject() {
        console.log("ABC Project");
    }
}

//Create sample child class.
class Child extends Parent {

    //Child Class Value
    course: string = "TypeScript";

    printProject() {
        console.log("XYZ Project");
    }

    printCourse(course: string) {
        console.log("Course Name: " + course);
        //    console.log("Course Name: " + new Child().course);
        //    console.log("Course Name: " + new Parent().course);
        console.log("Course Name: " + this.course);
        // console.log("Course Name: " + super.course);
        super.printProject();

    }

}

let obj = new Child();
obj.printCourse("Playwright");