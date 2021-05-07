// types in typescript
let myString: string;
let myNumber: number;
let myBoolean: boolean;
let myStr: string;

// we can concantinate a string
// mySting = "Hello"+ " " + "World"
// can do function reutn
myStr = "Hello".slice(0, 3);
myString = "I am ";
// a number can have potive and negative numbers , can also include 5 + 5
// can have a decimal , hexadecimal is also fine -
myNumber = 22 - 3;
myBoolean = false;

// Any
// any can be anything , string , number , boolean
let myVar: any;

myVar = "hello";

// Array
let strArray: string[];
let numArray: number[];
let boolArray: boolean[];
// another ways to define an array
let sArray: Array<string>;
let nArray: Array<number>;
let bArray: Array<boolean>;

strArray = ["hello", "world"];
numArray = [10, 20, 30];
boolArray = [true, false, true, false];

// TUPLE : an array with defined number of elements
let strNumTuple: [string, number];

// the postion of the avakue should also match , first element should be sting and the second should be a number in this example
strNumTuple = ["hello", 10];

//void - void can be null , undefined
let myVoid: void = undefined;
let myNull: null = undefined;
let myUndefined: undefined = undefined;

console.log(myVoid);
