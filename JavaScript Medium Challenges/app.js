/**
 * QUESTION 1
 * FALSY OR TRUTHY?
 * Given two values, return the first one if is falsy, otherwise return the second one.
 * filterOutFalsy(0, 500) -> 0
 * filterOutFalsy(false, 100) -> false
 * filterOutFalsy(true, "Dog") -> "Dog"
 */

function filterOutFalsy(elem1, elem2) {
    return (!elem1) ? elem1 : elem2
}

console.log(filterOutFalsy(true, "Dog"))


/**
 * QUESTION 2
 * RETURN THE LENGTH OF ANY GIVEN ARRAY
 * Given an array, return its length.
 * arrLength([1, 2, 3]) -> 3
 * arrLength([5, 0, -4, 1]) -> 4
 * arrLength([]) -> 0
 */

 function arrLength(arr) {
    return arr.length
}

console.log(arrLength([]))


/**
 * QUESTION 3
 * GET THE LAST ELEMENT IN AN ARRAY
 * Given an array return the first element.
 * lastElem([3, 2, 0, 6, 2]) -> 2
 * lastElem(["Dog", "Cat", "Ball"]) -> "Ball"
 * lastElem([null, 5, false]) -> false
 */

function lastElem(arr) {
    return arr[arr.length - 1]
}

console.log(lastElem([null, 5, false]))


/**
 * QUESTION 4
 * FIND THE SUM OF AN ARRAY
 * Given an array, return the sum of every element.
 * arrSum([2, 2, 2]) -> 6
 * arrSum([100, 200, 500]) -> 800
 * arrSum([0, -5, -10]) -> -15
 */

function arrSum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; ++i) {
        sum = sum + arr[i]
    }
    return sum
}

console.log(arrSum([0, -5, -10]))


/**
 * QUESTION 5 
 * ADD UP THE NUMBERS FROM A SINGLE NUMBER
 * Given a number, add up all the numbers from one to the number that is given. E.g. An input of 4 will give you 1 + 2 + 3 + 4, wich equals 10.
 * progressiveSum(3) -> 6
 * progressiveSum(4) -> 10
 * progressiveSum(600) -> 180300
 */

function progressiveSum(num) {
    let sum = 0
    for (let i = 1; i <= num; ++i) {
        sum = sum + i
    }
    return sum
}

console.log(progressiveSum(600))


/**
 * QUESTION 6
 * CALCULATE THE TIME
 * Given a number in seconds, return this number in mm:ss format.
 * calcTime(66) -> "01:06"
 * calcTime(50) -> "00:50"
 * calcTime(300) -> "05:00"
 */

function calcTime(seconds) {
    let timerMinutes = Math.floor(seconds / 60)
    let timerSeconds = seconds % 60 
    if (timerMinutes.toString().length === 1) {
        timerMinutes = "0" + timerMinutes
    }
    return timerMinutes + ":" + timerSeconds
}

console.log(calcTime(50))


/**
 * QUESTION 7
 * FIND THE LARGEST NUMBER
 * Given an array of numbers, return the largest number of that array
 * getMax([5, 100, 0]) -> 100
 * getMax([12, 10, -20]) -> 12
 * getMax([-300, -100, -200]) -> -100
 */

function getMax(arr) {
    let max = arr[0]
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}

console.log(getMax([-300, -100, -200]))


/**
 * QUESTION 8
 * REVERSE A STRING
 * Give a string, return the reversed string
 * reverseString("abc") -> "cba"
 * reverseString("David") -> "divaD"
 * reverseString("This is cool") -> "looc si sihT"
 */

function reverseString(str) {
    // .split("") STRING TO ARRAY
    // .reverse() REVERSE AN ARRAY (ONLY AN ARRAY)
    // .join("") ARRAY TO STRING
    return str.split("").reverse().join("")
}

console.log(reverseString("This is cool"))


/**
 * QUESTION 9
 * TURN EVERY ELEMENT IN AN ARRAY INTO 0
 * Given an array of elements, return the same length array filled with 0's
 * convertToZeros([5, 100, 0]) -> [0, 0, 0]
 * convertToZeros([12]) -> [0]
 * convertToZeros([1, 2, 3, 4, 5]) -> [0, 0, 0 ,0 ,0]
 */

function convertToZeros(arr) {
    // return new Array(arr.length).fill(0) // Not a very common used
    return arr.map(elem => 0) // EXTREMELY IMPORTANT. .map It converts every element of the array. If you have {} you have to return something.
}

console.log(convertToZeros([1, 2, 3, 4, 5]))


/**
 * QUESTION 10
 * FILTER OUT ALL THE APPLES
 * Given an array of fruits, if it is an apple remove it from the array
 * removeApples(["Banana", "Apple", "Orange", "Apple"]) -> ["Banana", "Orange"]
 * removeApples(["Tomato", "Orange", "Banana"]) -> ["Tomato", "Orange", "Banana"]
 * removeApples(["Banana", "Orange", "Apple"]) -> ["Banana", "Orange"]
 */

function removeApples(arr) {
    return arr.filter(elem => elem !== "Apple")
}

console.log(removeApples(["Banana", "Apple", "Orange", "Apple"]))


/**
 * QUESTION 11
 * FILTER OUT ALL THE FALSY VALUES
 * Given an array of values, filter out all the falsy values and only return the truthy values.
 * filterOutFalsy(["", [], 0, null, undefined, "0"]) -> [[], "0"]
 * filterOutFalsy(["Tomato", "Orange", "Banana", false]) -> ["Tomato", "Orange", "Banana"]
 * filterOutFalsy(["Banana", "Orange", "Apple"]) -> ["Banana", "Orange"]
 */

function filterOut(arr) {
    return arr.filter(elem => !!elem === true)
}

console.log(filterOut(["", [], 0, null, undefined, "0"]))


/**
 * QUESTION 12
 * TRUTHY TO TRUE, FALSY TO FALSE
 * Given an array of truthy and falsy values, return the same array of elements into its boolean value.
 * convertToBoolean([500, 0, "David", "", []]) -> [true, false, true, false, true]
 */

function convertToBoolean(arr) {
    return arr.map(elem => !!elem)
}

console.log(convertToBoolean([500, 0, "David", "", []]))
