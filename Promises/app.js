// fetch("https://jsonplaceholder.typicode.com/users/1")
// const emailRef = document.querySelector(".email");

// 1.- Then. It gives us a callback ---> () => {} ---> response is the best practice and since is one argument it doesn't need the ()
// fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         emailRef.innerHTML = data.email
//     })

// 2.- Async/Await
// async function main() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
//     const data = await response.json()
//     emailRef.innerHTML = data.email
// }
// 
// main()

const statusRef = document.querySelector(".status")

function getSubscriptionStatus () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("FREE")
        }, 1000)
    })
}
// async function main() {
//     const status = (await getSubscriptionStatus())
//     statusRef.innerHTML = status
// }
// 
// main()

/**
 * 1. Create a function called `getVideo`
 * 2. Accept a parameter called `subscriptionStatus`
 * 3. Return a new Promise inside of the function that:
 *      - if "VIP" resolve ("show video")
 *      - if "FREE" resolve ("show trailer")
 *      - otherwise reject("no video")
 * 4. console.log the result of getVideo() in main()
 */

function getVideo(subscriptionStatus) {
    return new Promise((resolve, reject) => {
        if (subscriptionStatus === "VIP") {
            resolve("show video")
        }
        else if (subscriptionStatus === "FREE") {
            resolve("show trailer")
        }
        else {
            reject("no video")
        }
    })
}

async function main() {
    const status = await getSubscriptionStatus()
    statusRef.innerHTML = status
    console.log(await getVideo(status))
}

main()