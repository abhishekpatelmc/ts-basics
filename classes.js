var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    //   consturcutor is used to initilize the value that is passed from an object
    //   when an object is create the properties will be initlized with the values that is sent from the object parameter - thi is done by contstuctor
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log("user created " + this.name);
    }
    User.prototype.register = function () {
        //even the methods can be made private and only accesable within the calss
        console.log(jhon.name + " " + jhon.email + " " + jhon.age + " is registred");
    };
    User.prototype.payInvoice = function () {
        console.log(jhon.email + " invoice generated");
    };
    return User;
}());
var jhon = new User("Jhon Doe", "jhon@gmail.com", 24);
// console.log(jhon.name + " " + jhon.email + " " + jhon.age); if the properties inside the class are private we it cant be accesed here
jhon.register();
// Inheritance
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
        // we dont have to do this.name.... since we have called super it will do the things in the parent calss
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
var mike = new Member(1, "Mike", "mike@gmail.com", 26);
mike.payInvoice();
