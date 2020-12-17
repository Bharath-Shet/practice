let win = 0
let loose = 0
for (i = 0; i < 3; i++) {
    let userInput = prompt()
    let randomNumber = Math.floor(Math.random() * (20 - 1)) + 1
    if (Number(userInput) >= randomNumber) {
        win = win + 1
    } else {
        loose = loose + 1
    }
}

if (win >= 2) {
    console.log(`User wins the game with point ${win}`)
} else {
    console.log(`User lost the game`)
}