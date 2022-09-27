input.onPinPressed(TouchPin.P0, function () {
    game.pause()
})
input.onButtonPressed(Button.A, function () {
    Heroe.move(-1)
})
input.onPinPressed(TouchPin.P2, function () {
    control.reset()
})
input.onButtonPressed(Button.AB, function () {
    Heroe.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    Heroe.move(1)
})
input.onPinPressed(TouchPin.P1, function () {
    game.resume()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Heroe.change(LedSpriteProperty.Y, -1)
})
let Heroe: game.LedSprite = null
let X = 0
let y = 0
Heroe = game.createSprite(0, 1)
let Villano = game.createSprite(2, randint(0, 4))
game.setLife(3)
basic.forever(function () {
    Villano.change(LedSpriteProperty.X, randint(0, 4))
    Villano.change(LedSpriteProperty.X, randint(0, 4))
    basic.pause(2000)
    if (Heroe.isTouching(Villano)) {
        music.playTone(131, music.beat(BeatFraction.Breve))
        game.removeLife(1)
        Villano.set(LedSpriteProperty.X, randint(0, 4))
        Villano.set(LedSpriteProperty.Y, randint(0, 4))
    }
    game.addScore(1)
})
