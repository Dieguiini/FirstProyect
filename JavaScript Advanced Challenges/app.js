/**
 * QUESTION 1
 * SHOW RATING
 * Given a rating, display a star (*) for each full rating and a full-stop (.) for each half rating
 * showRating(3) -> "* * *"
 * showRating(4.5) -> "* * * * ."
 * showRating(0.5) -> "."
 */

function showRating(rating) {
    // initialise an empty string
    let ratings = ""
    // loop through the rounded down rating
    for (let i = 0; i < Math.floor(rating); ++i) {
        // add a * for every iteration
        ratings += "*"
        // if its not the last iteration add a space
        if (i !== Math.floor(rating) - 1) {
            ratings += " "
        }
    }
    // if the number is not an integer
    if (!Number.isInteger(rating)) {
        // add a full stop
        ratings += " ."
    }
    // return it
    return ratings
}

console.log(showRating(4.5))


/**
 * QUESTION 2
 * SORT BY LOWEST TO HIGHEST PRICE
 * Given an array of numbers, return the prices sorted by low to high
 * sortLowToHigh([20, 40, 10, 30, 50, 10]) -> [10, 10, 20, 30, 40, 50]
 * sortLowToHigh([5, 10, 0, -5]) -> [-5, 0, 5, 10]
 * sortLowToHigh([3, 2, 1, 0]) -> [0, 1, 2, 3]
 */

function sortLowToHigh(numbers) {
    return numbers.sort((a, b) => a - b)
}

console.log(sortLowToHigh([1, 5, 10, 100, 65, 6, -8, 80]))


/**
 * QUESTION 3
 * SORT BY HIGHEST TO LOWEST PRICE
 * Given an array of objects, return the prices sorted by high to low.
 * sortHighToLow([
 *  {id: 1, price: 50}
 *  {id: 2, price: 30}
 *  {id: 3, price: 60}
 *  {id: 4, price: 10}
 * ])
 * ->
 * [
 *  {id: 3, price 60}
 *  {id: 1, price 50}
 *  {id: 2, price 30}
 *  {id: 4, price 10}
 * ]
 */

function sortHighToLow(numbers) {
    return numbers.sort((a, b) => b.price - a.price)
}

console.log(
    sortHighToLow([
        { id: 1, price: 50 },
        { id: 2, price: 30 },
        { id: 3, price: 60 },
        { id: 4, price: 10 }
    ])
)


/**
 * QUESTION 4
 * PROMISES (ARE EXTREMELY IMPORTANT FOR MID LEVEL JUNIOR POSITIONS)
 * On Youtube, watch:
 * "The Async Await Episode I Promised" - Fireship (NO NEED TO CODE HERE)
 * "Async Await JavaScript ES7" - Techsith (1.5x Speed) (NO NEED TO CODE HERE)
 * "Async JS Crash Course - Callbacks, Promises, Async Await" - Traversy Media (1.5x Speed) ()
 */


/** QUESTION 5
 * FIND ALL THE POSTS BY A SINGLE USER
 * Call this API "https://jsonplaceholder.typicode.com/posts" and return all the posts by any given user Id.
 * postsByUser(4) -> 
 */

async function postByUser(userId) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts")
    const result = await promise.json()
    const posts = result.filter(element => element.userId === userId)
    console.log(posts)
}

postByUser(4)

/**
 * QUESTION 6
 * FIRST 6 INCOMPLETE TODOS
 * Call this API "https://jsonplaceholder.typicode.com/todos" and return the first 6 incomplete todo's from the result
 * firstSixIncomplete() ->
 */

async function firstSixIncomplete(completed) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos")
    const result = await promise.json()
    const incompleted = result.filter(element => !element.completed).slice(0, 6)
    console.log(incompleted)
}

firstSixIncomplete(6)