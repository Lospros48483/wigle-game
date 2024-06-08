input.onGesture(Gesture.LogoUp, function () {
    Walk += 1
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . # # # .
        `)
    music.play(music.stringPlayable("B A G F F G A B ", 1200), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.A, function () {
    Walk = 0
})
input.onGesture(Gesture.Shake, function () {
    Walk += 1
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . # # # .
        `)
    music.play(music.stringPlayable("B A G F F G A B ", 1200), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showNumber(Walk)
})
let Walk = 0
Walk = 0
basic.forever(function () {
    basic.showNumber(Walk)
    if (50 == Walk) {
        basic.showIcon(IconNames.Yes)
        music.play(music.stringPlayable("C5 G - C C G - C ", 120), music.PlaybackMode.UntilDone)
    }
    if (100 == Walk) {
        basic.showIcon(IconNames.Heart)
        music.play(music.stringPlayable("C5 G - C C G - C ", 120), music.PlaybackMode.UntilDone)
    }
    if (150 == Walk) {
        basic.showIcon(IconNames.Surprised)
        music.play(music.stringPlayable("C5 G - C C G - C ", 120), music.PlaybackMode.UntilDone)
    }
    if (200 == Walk) {
        basic.showIcon(IconNames.Happy)
        music.play(music.stringPlayable("C5 G - C C G - C ", 120), music.PlaybackMode.UntilDone)
    }
    if (250 == Walk) {
        basic.showIcon(IconNames.Fabulous)
        music.play(music.stringPlayable("C5 G - C C G - C ", 120), music.PlaybackMode.UntilDone)
    }
    if (350 == Walk) {
        basic.showIcon(IconNames.SmallSquare)
        basic.pause(100)
        basic.showIcon(IconNames.Square)
        basic.pause(100)
        basic.showIcon(IconNames.SmallSquare)
        basic.pause(100)
        basic.showIcon(IconNames.Square)
        music.play(music.stringPlayable("C5 G - C C G - C ", 120), music.PlaybackMode.UntilDone)
    }
})
