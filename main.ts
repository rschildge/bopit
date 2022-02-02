input.onButtonPressed(Button.A, function () {
    checkButtonPress("L")
})
function checkButtonPress (letter: string) {
    // User has guessed correctly
    if (patternList[index] == letter) {
        index += 1
        // User has pressed all buttons correctly
        if (patternList.length == index) {
            addRandomElement()
            showPattern()
        }
    } else {
        // User has guessed incorrectly
        gameOver()
    }
}
function newGame () {
    patternList = []
    addRandomElement()
    showPattern()
}
function gameOver () {
    basic.showIcon(IconNames.Sad)
    basic.showString("Try again")
    newGame()
}
input.onButtonPressed(Button.B, function () {
    checkButtonPress("R")
})
function addRandomElement () {
    if (randint(0, 1) == 0) {
        patternList.push("L")
    } else {
        patternList.push("R")
    }
    index = 0
}
function showPattern () {
    for (let value of patternList) {
        if (value == "L") {
            basic.showLeds(`
                . . # . .
                . # # . .
                # # # # #
                . # # . .
                . . # . .
                `)
        } else {
            basic.showLeds(`
                . . # . .
                . . # # .
                # # # # #
                . . # # .
                . . # . .
                `)
        }
        basic.pause(1000)
        basic.clearScreen()
        basic.pause(500)
    }
}
let index = 0
let patternList: string[] = []
newGame()
