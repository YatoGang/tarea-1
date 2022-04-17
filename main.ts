input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
        basic.clearScreen()
        basic.pause(500)
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            `)
        basic.clearScreen()
        basic.pause(500)
        basic.showLeds(`
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            `)
        basic.clearScreen()
    }
})
basic.forever(function () {
    basic.pause(500)
    while (input.buttonIsPressed(Button.AB)) {
        basic.showString("PARE")
        music.playMelody("- B A B A B A B ", 100)
        basic.showIcon(IconNames.Skull)
        basic.pause(500)
        basic.clearScreen()
    }
    basic.pause(500)
    while (input.isGesture(Gesture.Shake)) {
        basic.showString("AGITADO")
        music.playMelody("- G F G F G F G ", 100)
        basic.showIcon(IconNames.Silly)
        basic.pause(500)
        basic.clearScreen()
    }
})
basic.forever(function () {
	
})
