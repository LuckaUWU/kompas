let kompas = 0
basic.forever(function () {
    kompas = input.compassHeading()
    if (kompas < 45) {
        basic.showString("Sever")
    } else if (kompas < 135) {
        basic.showString("Vychod")
    } else if (kompas < 225) {
        basic.showString("Juh")
    } else if (kompas < 315) {
        basic.showString("Zapad")
    } else {
        basic.showString("Kompas")
    }
})
