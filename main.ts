let x = 0
let y = 0
input.onButtonPressed(Button.A, function () {
    if (x > 0) {
        led.unplot(x, y)
        x += -1
    }
})
input.onButtonPressed(Button.B, function () {
    if (x < 4) {
        led.unplot(x, y)
        x += 1
    }
})
input.onGesture(Gesture.Shake, function () {
    y = 4
    x = 2
    for (let x_pos = 0; x_pos <= 4; x_pos++) {
        for (let y_pos = 0; y_pos <= 4; y_pos++) {
            led.unplot(x_pos, y_pos)
        }
    }
    led.plot(x, y)
})
basic.forever(function () {
    led.plot(x, y)
})
