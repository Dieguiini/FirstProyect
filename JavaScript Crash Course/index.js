/* 
DATA TYPES:
undefined, null, boolean, string, symbol, number and object
*/

/* 
VVARIABLES: var, let, const
var: not used anymore
let: only used within the scope of where is declared
const: it's constant, it can't be changed
*/

/* 
STORING VALUES WITH THE ASSIGNMENT OPERATOR
var a;
var b = 2;
console.log(a);
a = 7;
b = a;
console.log(a);
*/

/* 
INITIALIZING VARIABLES W/ ASSIGNMENT OPERATOR
var a = 9;
*/

/* 
UNINITIALIZED VARIABLES
// Initialize these three variables
var a = 5;
var b = 10;
var c = "I am a";

// Do not change code below this line
a = a + 1;
b = b + 5;
c = c + " String!";
*/ 

/* 
CASE SENSITIVITY IN VARIABLES
// Declarations
var studyCapVar;
var properCamelCase;
var titleCaseOver;

// Assignments
studyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000; 

//Parte en minuscula, todo junto y cada nueva palabra parte con Mayuscula
*/

/* 
ADDING NUMBERS
var sum = 10 + 10;
console.log(sum); // will print 20.
*/

/* 
SUBSTRACTING NUMBERS
var difference = 45 - 10;
console.log(difference); // will print 35.
*/

/* 
MULTIPLYING NUMBERS
var product = 8 * 2;
console.log(product); // will print 16.
*/

/* 
DIVIDING NUMBERS
var quotient = 66 / 2;
console.log(quotient); // will print 33.
*/

/* 
INCREMENTING NUMBERS // It means to add 1 to it.
var myVar = 87;
myVar++; // Quicker way to do this is adding ++.
*/

/*
DECREMENTING NUMBERS // It means to substract 1 to it.
var myVar = 11;
myVar--; // Quicker way to do this is adding --.
*/

/*
DECIMAL NUMBERS // Sometimes refferd as floating point numbers or floats.
var ourDecimal = 5.7;
*/

/*
MULTIPLYING DECIMALS
var product = 2.0 * 2.5;
console.log(product); // Will print 5.
*/

/* 
DIVIDE DECIMALS
var quotient = 4.4 / 2.0;
console.log(quotient); // will print 2.2
*/

/*
FINDING A REMAINDER // It looks like a % sign and it's the remainder of a division of 2 numbers.
var remainder;
remainder = 11 % 3; // The remainder will be 2.

// The remainder operators are often used to determined if a number is even or odd.
*/

/*
COMPOUND ASSIGNMENT WITH AUGMENTED ADDITION
var a = 3;
var b = 17;
var c = 12;

a = a + 12; 
b = 9 + b; 
c = c + 7;
// Shortcut to do the same thing

a += 3;
b += 9;
c += 7;
*/

/*
COMPOUND ASSIGNMENT WITH AUGMENTED SUBSTRACTION
var a = 11;
var b = 9;
var c = 3;

a -= 6;
b -= 15;
c -= 1;
*/

/*
COMPOUND ASSIGNMENT WITH AUGMENTED MULTIPLICATION
var a = 5;
var b = 12;
var c = 4.6;

a *= 5;
b *= 3;
c *= 10;
*/

/*
COMPOUND ASSIGNMENT WITH AUGMENTED DIVISION
var a = 48;
var b = 108;
var c = 33;

a /= 12;
b /= 4;
c /= 11;
*/

/*
DECLARE STRING VARIABLES
var firstName = "Diego";
var lastName = "Gajardo";
*/

/*
ESCAPING LITERAL QUOTES IN STRINGS
var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr);
*/

/*
QUOTING STRINGS WITH SINGLE QUOTES
var myStr = '<a href="https://www.google.cl" target="_blank">Link</a>'; // Mas facil con '' para despues cualquier "" no se tenga que poner el \.
console.log(myStr);
*/

/*
ESCAPE SEQUENCES IN STRINGS

Code Output
\' single quote
\" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"
console.log(myStr)
*/

/*
CONCATENATING STRINGS WITH PLUS OPERATOR
var ourStr = "I come first. " + "I come second.";
*/ 

/*
CONCATENATING STRINGS WITH PLUS EQUALS OPERATOR
var ourStr = "I come first. ";
ourStr += "I come second.";
console.log(ourStr);
*/

/*
CONSTRUCTING STRINGS WITH VARIABLES
var ourName = "Diego";
var ourStr = "Hello, my name is " + ourName + ", how are you?";
console.log(ourStr);
*/

/*
APPENDING VARIABLES TO STRINGS
var anAdjective = "awesome!";
var ourStr = "JavaScript is ";
ourStr += anAdjective;
console.log(ourStr);
*/

/*
FIND LENGHT OF STRING
var firstNameLenght = 0;
var firstName = "Diego";
firstNameLenght = firstName.length;
console.log(firstNameLenght);
*/


