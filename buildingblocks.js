// Reviewing Building Blocks of Javascript

// Values and Variables

// Primitive Types of Data in JS

/* NUMBERS- a primitive data type witihtn Javascript that allows us to utilize numerical values */

// We can use arithemtic operators to compute various mathematical problems

/* Arithmetic Operators */

var add = 1+1;
var subtract = 2-1;
var multiply = 3*3;
var divide = 400/45;
var modulo = 27%2;


// VARIABLES

/* Variables are like "jar labels in Javascript"
We can store a value to use it recall it and change it later */

var age = 26;

// let
let myName = "Gia";

let students = 20
let teachers = 2
// new student joins school
students = students + 1;

let totalSchool = students + teachers; 

//const
/* Values initialized with the const varible cannot be change */

const daysInWeek = 7;

//var

/*Before let and const there was var */

// Unary Operators
/*An operator that takes a single operand/argument and performs an operation */

    //  Practice

// Return the Sum of Two Numbers
// create a function that take two numbers as argument and returns sum

function addition (num1,num2){
return num1 + num2;
}

// BOOLEAN

/*true or false values*/

let bool1 = true;
let bool2 = false;

// STRING
/* Strings are pieces of text or strings of characters */

let firstName = "Gia";

let lastName = "Rushing";

let msg = "Hello, how are you?";

let animal = "Parrot";

let good = 'this is right';

let quotes = 'She said, "lol"';

let fullName = firstName + " " + lastName;

/* IMPORTANT TO KNOW -
Strings are indexed, every character in a a string is assigned a corresponding number based off its position in string. (starting from 0 left to right) */

// every string has a length property

quotes.length // 15

//Is the String Empty?

/*Create a function that returns true if a string is empty and false otherwise.

isEmpty("") ➞ true

isEmpty(" ") ➞ false

isEmpty("a") ➞ false

*/

let myGenre = "Lo Fi";

myGenre.length; //5

myGenre[5]; //undefined

myGenre[myGenre.length-1]; // i


/*QUESTION? : Are string immutable?
ANSWER: Yes.*/

let msg = "Hello there!"






