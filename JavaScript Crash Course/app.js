// console.log("Hello World"[10])

// let name = "Diego"
// let fullName = "Diego Gajardo"
// console.log(fullName)

/**
 * Converting Temperatures
 * 
 * Celsius-to-Fahrenheit formula:
 * 
 *    F = C x 1.8 + 32
 */

/*
let celsius = 10;
let fahrenheit = celsius * 1.8 + 32; // convert celsius to fahrenheit
console.log(fahrenheit); // print out the result
*/

/*
CONDITIONALS

if - else if - else

let cash = 10
let price = 40
let difference = cash - price

if (cash > price) {
    console.log(`you paid extra - here's ${difference} dollars change`)
} else if (cash === price) {
    console.log("You paid the exact ammount, have a nice day!")
} else {
    console.log(`not enough money, you still owe ${difference * -1} dollars`)
}
*/

/*
COMPARISON OPERATORS

Comparing two values with each other

== equal values
=== equal values and types
!= not equal
!== not equal and equal type
> greater than
< less than
>= greater than or equal to
<= less than or equal to

*/

/*
LOGICAL OPERATORS

&& checks if the left AND right side of the comparison is true

true && true --> true
true && false --> false
false && true --> false
false && false --> false

let cash = 50
let price = 40
let isStoreOpen = true

if (cash >= price && isStoreOpen === true) {
    console.log("print the receipt")
}

|| checks if the left OR right side of the comparison is true

true || true --> true
true || false --> true
false || true --> true
false || false --> false

An ! in front of a BOOLEAN it means the opposite boolean.

isStoreOpen === true --> (isStoreOpen)
isStoreOpen === false --> (!isStoreOpen)
}
*/

/*
FALSY VALUES

A falsy value is considered as 'false' when converted to a boolean

undefined
null
NaN
0
"" (empty string)
false

TRUTHY VALUES 

A truthy value is considered as 'true' when converted to a boolean

10
3.14
"Fronted Simplified"
"false"
"0"
[] empty arrays
{} empty objects

let val = "Diego";

if (val) {
    console.log(!!val)
} else {
    console.log(!!val)
}
*/

/* TERNARY OPERATORS

A shortcut for an if else condition

isObese ? 'unhealthy':'healthy'
subscribed ? 'show video':'hide video'
if           truthy      falsy

let hot = true
hot ? console.log("weather is hot outside") : console.log("weather is cold")

let subscribed = true
let loggedIn = false

let str = subscribed && loggedIn ? "Show the video" : "Hide the video"
console.log(str)

let cash = 50
let price = 40
let isStoreOpen = true
// "give receipt" : "don't give receipt"

let str = cash >= price && isStoreOpen ? "give receipt" : "don't give receipt"
console.log(str)

*/

/*
LOOPS

What are loops used fot?
Repeat the same code over and over again
*** DRY = Don't Repeat Yourself ***

for loop
while loop
do while loop

// while loop
let count = 1
while (count <= 100) {
    console.log(count)
    count = count + 1
}

// for loop

let count = 1
    //  "i" = set to 0  
    //  "i" less than how many times we want to loop
    //  "i" incremented by 1

for (let i = 0; i < = 3; i++) {
                
    console.log(i)
}
*/
/** Write a for-loop that loops through 1 to 20
 * If the number is divisible by 3, print "Frontend"
 * If the number is divisible by 5, print "Simplified"
 * If the number is divisible by 3 and 5, print "Frontend Simplified"
 * if the number is *NOT* divisible by either 3 or 5, print the number
 * 
 * @example
 * 1 -> 1
 * 2 -> 2
 * 3 -> "Frontend"
 * 4 -> 4
 * 5 -> "Simplified"
 * ...
 * 15 -> "Frontend Simplified"
 * ...
 * 20 -> "Simplified" 
 
for (i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} --> Frontend Simplified`)
    } else if (i % 3 === 0) {
        console.log(`${i} --> Frontend`)
    } else if (i % 5 === 0) {
        console.log(`${i} --> Simplified`)
    } else {
        console.log(`${i} --> ${i}`)
    }
}

/**
 * Print out every character from the string:
 * "Frontend Simplified"
 * 
 * @example
 * "F"
 * "r"
 * "o"
 * ...
 * "e"
 * "d"

const str = "Frontend Simplified"
for (i = 0; i < str.length; i++) {
    console.log(str[i])
}
*/

/*
FUNCTIONS

What is a function in JavaScript?

It is a block of code designed to perform a particular task

// Function definition --------> ONLY ONCE
function welcomePersonToFES(firstName, lastName) {
    //console.log("Welcome to FES, David")
    console.log(`Welcome to FES, ${firstName} ${lastName}`)
}
// Call the function --------> AS MANY TIMES WE WANT
welcomePersonToFES("Diego", "Gajardo") // ---> Inside the () are call ARGUMENTS
welcomePersonToFES("Zen", "Murito")
welcomePersonToFES("Mitri", "Gimli")

function sumOfTwoNumbers(num1, num2) { // (PARAMETER when you define the function)
    return num1 + num2
}

console.log(sumOfTwoNumbers(10, 10)) // (ARGUMENT when you call the funciton)

*/

/** Create a function that converts Celcius to Fahrenheit
 * 
 * Celsius to Fahrenheit formula:
 *   F = C x 1.8 + 32
 * 
 * @example
 * convertCelsiusToFahrenheit(0) --> 32
 * convertCelsiusToFahrenheit(10) --> 50
 * convertCelsiusToFahrenheit(30) --> 86
 
function convertCelsiusToFahrenheit(celsius) {
    return celsius * 1.8 + 32
}
console.log(convertCelsiusToFahrenheit(0))
console.log(convertCelsiusToFahrenheit(10))
console.log(convertCelsiusToFahrenheit(30))

const convertCelsiusToFahrenheit = (celsius) => { // ARROW FUNCTION
    return celsius * 1.8 + 32
}
console.log(convertCelsiusToFahrenheit(0))

*/

/*
ARRAYS 

What are arrays?

Data structure that can hold multiple data values in one variable

let arr = [20, 30, 40, 50, 100] // x variables inside 1 variable
// First element of array:
console.log(arr[0])
// Last element of array:
console.log(arr[arr.length - 1])
// Add an element onto end array: .push
arr.push(200)

// THE FILTER METHOD ONLY ADDS THINGS TO THE ARRAY IF RETURNS TRUE
// CALLBACKS FUNCTIONS
[20, 30, 40, 50, 100]
let newArr = arr.filter((element) => {
   console.log(element)
    if (element < 50) {
        return true
    }
})
console.log(newArr)

// IN ONE LINE
let newArr = arr.filter(element => element < 50)
console.log(newArr)
*/

/** 
 * Filter out all the "FAIL" elements in an array
 * 
 * @examples
 * ["A+", "A", "FAIL"] => ["A+", "A"]
 * ["FAIL", "FAIL", "B"] => ["B"]
 * ["FAIL"] => []
 */

// let grades = ["A+", "A", "FAIL"]
// let goodGrades = grades.filter(element => element !== "FAIL")
// console.log(goodGrades)

/** LONG METHOD */
// let goodGrades = grades.filter((element) => {
//     console.log(element)
//     if (element !== "FAIL") {
//         return true
//     }
// })
// console.log(goodGrades)

/** 
 * Filter out all the "FAIL" elements in an array
 * without using the array.filter method
 * 
 * @examples
 * ["A+", "A", "FAIL"] => ["A+", "A"]
 * ["FAIL", "FAIL", "B"] => ["B"]
 * ["FAIL"] => []
 */

// let grades = ["A+", "A", "FAIL"]
// 
// let goodGrades = []
// 
// for (let i = 0; i < grades.length; i++) {
//     if (grades[i] !== "FAIL") {
//         goodGrades.push(grades[i])
//     }
// }
// console.log(goodGrades)

// let grades = ["FAIL", "FAIL", "B"]
// let goodGrades = []
// 
// for (let i = 0; i < grades.length; i++) {
//     if (grades[i] !== "FAIL") {
//         goodGrades.push(grades[i])
//     }
// }
// console.log(goodGrades)

/* 

MAP METHOD // () => {} CALL BACK
Turn the elements in the array with return in new values

*/

// LONG METHOD
// let arr = [1, 4, 9, 16]
// let newArr = arr.map((element) => {
//     console.log(element)
//     return "dog"
// }) 
// console.log(newArr)

// SHORT METHOD
// let arr = [1, 5, 9, 15, 35, 65]
// let newArr = arr.map (element => 100)
// console.log(newArr)

/**
 * Turn each element in an array of dollars into cents
 * 
 * @examples
 * [1, 5, 10, 3] => [100, 500, 1000, 300]
 * [0, 10, 20] => [0, 1000, 2000]
 */
// let dollars = [1, 5, 10, 3]
// let cents = dollars.map((element) => {
//     return element * 100
// })
// console.log(cents)
// let cents = dollars.map(element => element * 100)
// console.log(cents)

/** WITHOUT USING THE MAP METHOD */
// let cents = []
// for (let i = 0; i < dollars.length; i++) {
//     cents.push(dollars[i] * 100)
// }
// console.log(cents)