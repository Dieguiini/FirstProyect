let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function getHand() {
    let randomItem = Math.floor(Math.random() * 3)
    return hands[randomItem]
}

console.log(getHand())
