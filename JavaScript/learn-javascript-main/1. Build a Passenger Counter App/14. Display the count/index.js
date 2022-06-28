let countEL = document.getElementById("count-el") // pass an argument
//console.log(countEL)
let count = 0
function increment() {
    count = count + 1
    countEL.innerText = count
    console.log(count)
}


