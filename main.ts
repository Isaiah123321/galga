namespace SpriteKind {
    export const laser = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        ...........fffffff...ccfff..........
        ..........fbbbbbbbffcbbbbf..........
        ..........fbb111bbbbbffbf...........
        ..........fb11111ffbbbbff...........
        ..........f1cccc1ffbbbbbcff.........
        ..........ffc1c1c1bbcbcbcccf........
        ...........fcc3331bbbcbcbcccf..ccccc
        ............c333c1bbbcbcbccccfcddbbc
        ............c333c1bbbbbbbcccccddbcc.
        ............c333c11bbbbbccccccbbcc..
        ...........cc331c11bbbbccccccfbccf..
        ...........cc13c11cbbbcccccbbcfccf..
        ...........c111111cbbbfdddddc.fbbcf.
        ............cc1111fbdbbfdddc...fbbf.
        ..............cccfffbdbbfcc.....fbbf
        ....................fffff........fff
        `, knight, 0, -100)
    projectile.setKind(SpriteKind.laser)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.laser, function (sprite, otherSprite) {
    if (info.score() == 50) {
        game.over(true)
    }
})
info.onLifeZero(function () {
    music.baDing.play()
    game.over(false, effects.splatter)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy(effects.confetti, 500)
})
sprites.onOverlap(SpriteKind.laser, SpriteKind.Enemy, function (sprite, otherSprite) {
    projectile.destroy()
    otherSprite.destroy(effects.fire, 500)
    music.baDing.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
let plate: Sprite = null
let pizza: Sprite = null
let projectile: Sprite = null
let knight: Sprite = null
let age = game.askForNumber("enter your age", 3)
knight = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(knight)
knight.setStayInScreen(true)
info.setLife(3)
for (let index = 0; index < 2; index++) {
    music.playMelody("C5 C5 - E A A C C ", 120)
}
for (let index = 0; index < 4; index++) {
    pause(100)
    knight.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f . . . 
        . . e 4 d d e 2 2 2 2 f e f . . 
        . . . e d d e 2 2 2 2 f 4 e . . 
        . . . . e e f 5 5 4 4 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `)
    pause(100)
    knight.setImage(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
    pause(100)
    knight.setImage(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f f f f d d d d d e e f . . 
        . f d d d d f 4 4 4 e e f . . . 
        . f b b b b f 2 2 2 2 f 4 e . . 
        . f b b b b f 2 2 2 2 f d 4 . . 
        . . f c c f 4 5 5 4 4 f 4 4 . . 
        . . . f f f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
}
game.onUpdateInterval(500, function () {
    pizza = sprites.create(img`
        . . . . . . b b b b . . . . . . 
        . . . . . . b 4 4 4 b . . . . . 
        . . . . . . b b 4 4 4 b . . . . 
        . . . . . b 4 b b b 4 4 b . . . 
        . . . . b d 5 5 5 4 b 4 4 b . . 
        . . . . b 3 2 3 5 5 4 e 4 4 b . 
        . . . b d 2 2 2 5 7 5 4 e 4 4 e 
        . . . b 5 3 2 3 5 5 5 5 e e e e 
        . . b d 7 5 5 5 3 2 3 5 5 e e e 
        . . b 5 5 5 5 5 2 2 2 5 5 d e e 
        . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
        . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
        b d 3 2 d 5 5 5 d d d 4 4 . . . 
        b 5 5 5 5 d d 4 4 4 4 . . . . . 
        4 d d d 4 4 4 . . . . . . . . . 
        4 4 4 4 . . . . . . . . . . . . 
        `, SpriteKind.Food)
    pizza.setVelocity(-50, 0)
    pizza.setPosition(160, randint(0, 120))
})
game.onUpdateInterval(500, function () {
    plate = sprites.create(img`
        ...............bbbbbbbbbbbbbbbbbbb...............
        ...........bbbbdd111111111111111ddbbbb...........
        ........bbbd1111111111111111111111111dbbb........
        ......bbd11111111dddddddddddddd111111111dbb......
        ....bbd1111111ddd11111111111111dddd1111111dbb....
        ...bd111111ddd111111111111111111111ddd111111db...
        ..bd11111ddd111ddddddddddddddddddd111ddd11111db..
        .bd11111dd111dddd111111111111111dddd111dd11111db.
        .b11111d111ddd111111111111111111111ddd111d11111b.
        bd11111d1ddd1111111111111111111111111ddd1111111db
        b11111d1ddd111111111111111111111111111ddd1d11111b
        b11111ddddd111111111111111111111111111ddddd11111b
        b11111ddddd111111111111111111111111111dddbd11111b
        b111111dddd111111111111111111111111111dddb111111b
        bd111111dddd1111111111111111111111111dddbd11111db
        .b1111111dddd11111111111111111111111dddbd111111b.
        .bd1111111dbbdd1111111111111111111dddbbd111111db.
        ..bd11111111dbbdd111111111111111dddbbd1111111db..
        ...bd111111111dbbbbbbdddddddddddddd111111111db...
        ....bbd11111111111dbbbbbbbbbddd11111111111dbb....
        ......bbdd11111111111111111111111111111ddbb......
        ........bbbdd11111111111111111111111ddbbb........
        ...........bbbbbddd11111111111dddbbbbb...........
        ................bbbbbbbbbbbbbbbbb................
        `, SpriteKind.Enemy)
    plate.setVelocity(0, 50)
    plate.setPosition(randint(0, 152), 0)
})
