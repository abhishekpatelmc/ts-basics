interface UserInterface {
  name: string;
  email: string;
  age: number;
  register();
  payInvoice();
}

class User implements UserInterface {
  name: string; // if we add private we cant access outside the calss
  email: string;
  age: number;

  //   consturcutor is used to initilize the value that is passed from an object
  //   when an object is create the properties will be initlized with the values that is sent from the object parameter - thi is done by contstuctor
  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;

    console.log("user created " + this.name);
  }

  register() {
    //even the methods can be made private and only accesable within the calss
    console.log(
      jhon.name + " " + jhon.email + " " + jhon.age + " is registred"
    );
  }

  payInvoice() {
    console.log(jhon.email + " invoice generated");
  }
}

let jhon = new User("Jhon Doe", "jhon@gmail.com", 24);
// console.log(jhon.name + " " + jhon.email + " " + jhon.age); if the properties inside the class are private we it cant be accesed here

jhon.register();

// Inheritance
class Member extends User {
  id: number;

  constructor(id: number, name: string, email: string, age: number) {
    super(name, email, age);
    this.id = id;
    // we dont have to do this.name.... since we have called super it will do the things in the parent calss
  }

  payInvoice() {
    super.payInvoice();
  }
}

let mike: User = new Member(1, "Mike", "mike@gmail.com", 26);
mike.payInvoice();
