input.onButtonPressed(Button.A, function () {
    if (diceSize == 6) {
        diceSize = 10
    } else if (diceSize == 10) {
        diceSize = 20
    } else if (diceSize == 20) {
        diceSize = 6
    } else {
    	
    }
})
input.onGesture(Gesture.Shake, function () {
    if (diceSize == 6) {
        basic.showString("" + (randint(1, 6)))
    } else if (diceSize == 10) {
        basic.showString("" + (randint(1, 10)))
    } else if (diceSize == 20) {
        basic.showString("" + (randint(1, 20)))
    } else {
    	
    }
})
let diceSize = 0
basic.showString("dice!")
diceSize = 6
basic.forever(function () {
    if (diceSize == 6) {
        basic.showString("d6")
    } else if (diceSize == 10) {
        basic.showString("d10")
    } else if (diceSize == 20) {
        basic.showString("d20")
    } else {
    	
    }
})
