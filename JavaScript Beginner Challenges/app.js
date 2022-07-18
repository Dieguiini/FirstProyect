/** QUESTION 1 
 * RETURN THE SUM OF TWO NUMBERS
 * Create a function that takes two arguments as functions and return their sum.
 * addition(3, 2) -> 5
 * addition(-3, -6) -> -9
 * addition(7, 3) -> 10
*/
function addition(num1, num2) {
    return num1 + num2
}
console.log(addition(7, 3))
 

/** QUESTION 2
 * CONVERT HOURS INTO SECONDS
 * Create a function that converts hours into seconds
 * hoursIntoSeconds(2) - 7200
 * hoursIntoSeconds(10) -> 36000
 * hoursIntoSeconds(24) -> 86400
 */

function hoursIntoSeconds(hour) {
    return hour * 60 * 60
}
console.log(hoursIntoSeconds(24))


/**
 *  QUESTION 3
 * CALCULATE THE PERIMETER OF A RECTANGLE
 * Create a function that takes lenght and width of a rectangle and return it's perimeter.
 * calcPerimeter(6 ,7) -> 26
 * calcPerimeter(20, 10) -> 60
 * calcPerimeter(2, 9) -> 22
 */

function calcPerimeter(lenght, width) {
    return 2 * (lenght + width)
}
console.log(calcPerimeter(2, 9))


/**
 * QUESTION 4
 * CALCULATE THE AREA OF A TRIANGLE
 * Write a function that takes the base and height of a triangle and return its area.
 * calcTriangleArea(3, 2) -> 3
 * calcTriangleArea(10, 10) -> 50
 * calcTriangleArea(20, 20) -> 200
 */

function calcTriangleArea(base, height) {
    return 0.5 * (base * height)
}
console.log(calcTriangleArea(3, 2))


/**
 * QUESTION 5
 * EXTEND A STRING
 * Write a function that accepts a string and adds "Frontend" onto the end of it
 * appendFrontend("Apple") -> "AppleFrontend"
 * appendFrontend("Banana") -> "BananaFrontend"
 * appendFrontend("Orange") -> "OrangeFrontend"
*/

function appendFrontend(string) {
    return string + "Frontend"
}
console.log(appendFrontend("Apple"))


/**
 * QUESTION 6
 * Greater than 100?
 * Given two numbers, return true if the sum of both numbers is greater than 100. Otherwise, return false.
 * sumGreaterThan100(20, 10) -> false
 * sumGreaterThan100(50, 60) -> true
 * sumGreaterThan100(100, -50) -> false
 */

function sumGreaterThan100(num1, num2) {
    return num1 + num2 > 100
    }
console.log(sumGreaterThan100(50, 60))


/**
 * QUESTION 7
 * LESS THAN OR EQUAL TO ZERO?
 * Write a function that accepts a number and returns true if it is less than or equal to zero, otherwise returns false
 * lessThanOrEqualToZero(3) -> false
 * lessThanOrEqualToZero(0) -> true
 * lessThanOrEqualToZero(-2) -> true
 */

function lessThanOrEqualToZero(num) {
    return num <= 0
}
console.log(lessThanOrEqualToZero(-2))


/**
 * QUESTION 8
 * OPPOSITE BOOLEAN
 * Given a boolean (true or false), return the opposite boolean
 * oppositeBoolean(true) -> false
 * oppositeBoolean(false) -> true
 */

function oppositeBoolean(bool) {
    return !bool // an ! infront of the boolean value is going to give you the opposite
}
console.log(oppositeBoolean(false))


/**
 * QUESTION 9
 * IS NOT THE NUMBER 0
 * Given ANY element, return true if it is NOT the number 0.
 * isNotZero(5) -> true
 * isNotZero(0) -> false
 * isNotZero(null) -> true
 */

function isNotZero(num) {
    return num !== 0
}    
console.log(isNotZero(null))


/**
 * QUESTION 10 
 * CALCULATE THE REMAINDER
 * Given two numbers, return their remainder when divided by each other
 * calcRemainder(4, 2) -> 0
 * calcRemainder(7, 8) -> 7
 * calcRemainder(9, 8) -> 1
 */

function calcRemainder(num1, num2) {
    return num1 % num2
}
console.log(calcRemainder(9, 8))


/**
 * QUESTION 11
 * IS THE NUMBER ODD?
 * Given two numbers, return true if the number is odd
 * isOdd(1) -> true
 * isOdd(2) -> false
 * isOdd(3) -> true
 */

function isOdd(num) {
    return num % 2 !== 0
}
console.log(isOdd(2))


/**
 * QUESTION 12
 * IF A NUMBER IS EVEN, RETURN 1 OTHERWISE RETURN -1
 * Create a function that takes a number argument and returns 1 if the number is even. If the number is odd return -1.
 * booleanInteger(1) -> -1
 * booleanInteger(2) -> 1
 * booleanInteger(5) -> -1
 */

 function booleanInteger(num) {
    return num % 2 === 0 ? 1 : -1
}
console.log(booleanInteger(2))


/**
 * QUESTION 13
 * CHECK IF A USER IS LOGGED IN AND SUBSCRIBED
 * Create a function that takes in two strings. If the first string is equal to "LOGGED_IN" AND the second string is equal to "SUBSCRIBED" return true, otherwise return false.
 * isLoggedInAndSubscribed("LOGGED_IN", "SUBSCRIBED") -> true
 * isLoggedInAndSubscribed("LOGGED_IN", "UNSUBSCRIBED") -> false
 * isLoggedInAndSubscribed("LOGGED_OUT", "SUBSCRIBED") -> false
 */

function isLoggedInAndSubscribed(loggedIn, subscribed) {
    return (loggedIn === "LOGGED_IN") && (subscribed === "SUBSCRIBED")
}
console.log(isLoggedInAndSubscribed("LOGGED_IN", "UNSUBSCRIBED"))


/**
 * QUESTION 14
 * CHECK IF A USER IS LOGGED IN OR SUBSCRIBED
 * Create a function that takes in two strings. If the first string is equal to "LOOGED_IN" OR the second string is equal to "SUBSCRIBED" return true, otherwise return false
 * isLoggedInOrSubscribed("LOGGED_IN", "SUBSCRIBED") -> true
 * isLoggedInOrSubscribed("LOGGED_IN", "UNSUBSCRIBED") -> true
 * isLoggedInOrSubscribed("LOGGED_OUT", "SUBSCRIBED") -> false
 */

 function isLoggedInOrSubscribed(loggedIn, subscribed) {
    return (loggedIn === "LOGGED_IN") || (subscribed === "SUBSCRIBED")
}
console.log(isLoggedInOrSubscribed("LOGGED_IN", "UNSUBSCRIBED"))
