// getsum(number , number) : number - the resutn value is also a number
function getSum(num1, num2) {
    return num1 + num2;
}
// console.log(getSum(10, 20));
var mySum = function (num1, num2) {
    if (typeof num1 === "string") {
        num1 = parseInt(num1);
    }
    if (typeof num2 === "string") {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
// console.log(mySum("1", "5"));
function getName(firstName, lastName) {
    if (lastName == undefined) {
        return firstName;
    }
    return firstName + " " + lastName;
}
// console.log(getName("Jhon", "Doe"));
console.log(getName("John")); //the question mark in the fuction says that the parameter can be optional
// void does not return anything
function myVoid() {
    return;
}
