let PacMan: Sprite = null
let Ghost: Sprite = null
let Ghost2: Sprite = null
let Ghost3: Sprite = null
let Chicken: Sprite = null
let coin: Sprite = null
let Owl: Sprite = null
scene.onOverlapTile(SpriteKind.Player, assets.tile`yellowcornlevel1winplace`, function (sprite, location) {
    game.over(true, effects.confetti)
})
function level2Pacman () {
    scene.setBackgroundImage(assets.image`Pacmanlevel1`)
    tiles.setCurrentTilemap(tilemap`level4`)
    maincharacterPacman()
    Pacman()
    food()
    PacMan.setPosition(25, 40)
    Ghost = sprites.create(assets.image`ghost1pacman`, SpriteKind.Enemy)
    Ghost.setPosition(250, 115)
    Ghost.follow(PacMan, 15)
    ghost()
    Ghost.setBounceOnWall(false)
    Ghost2 = sprites.create(assets.image`ghost2pacman`, SpriteKind.Enemy)
    Ghost2.setPosition(380, 170)
    Ghost2.follow(PacMan, 20)
    ghost2()
    Ghost2.setBounceOnWall(false)
    Ghost3 = sprites.create(assets.image`ghost3pacman`, SpriteKind.Player)
    Ghost3.setPosition(120, 75)
    Ghost3.follow(PacMan, 10)
    ghost3()
    Ghost3.setBounceOnWall(false)
}
function Pacman () {
    animation.runImageAnimation(
    PacMan,
    assets.animation`pacmanmaincharacteranimation`,
    150,
    true
    )
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    info.startCountdown(30)
})
function chicken () {
    animation.runImageAnimation(
    Chicken,
    assets.animation`chickenanimationlevel1`,
    200,
    true
    )
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    info.changeScoreBy(200)
    game.over(true)
})
function ghost2 () {
    animation.runImageAnimation(
    Ghost2,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . 4 4 4 4 4 4 4 . . . . 
        . . . . 4 4 4 4 4 4 4 4 . . . . 
        . . . 4 4 4 1 4 4 1 4 4 4 . . . 
        . . . 4 4 4 1 4 4 1 4 4 4 . . . 
        . . 4 4 4 4 9 4 4 9 4 4 4 4 . . 
        . . . 4 4 4 9 4 4 9 4 4 4 4 . . 
        . . 4 4 4 4 4 4 4 4 4 4 4 . . . 
        . . . 4 4 4 4 4 4 4 4 4 4 4 . . 
        . . 4 4 4 4 4 4 4 4 4 4 4 . . . 
        . . 4 4 4 4 4 4 4 4 4 4 4 . . . 
        . . . 4 4 4 4 4 4 4 4 4 4 . . . 
        . . . . 4 . 4 4 . 4 . 4 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 . 4 4 . . . . . . 
        . . . . . 4 4 4 4 4 4 4 . . . . 
        . . . . . 4 4 4 4 4 4 . . . . . 
        . . . 4 4 4 1 4 4 1 4 4 4 . . . 
        . . . . 4 4 1 4 4 1 4 4 . . . . 
        . . 4 4 4 4 9 4 4 9 4 4 4 4 . . 
        . . . . 4 4 9 4 4 9 4 4 . . . . 
        . . 4 4 4 4 4 4 4 4 4 4 4 . . . 
        . . . . 4 4 4 4 4 4 4 4 . . . . 
        . . . . 4 4 4 4 4 4 4 4 4 . . . 
        . . 4 4 4 . 4 4 4 4 4 . 4 . . . 
        . . . 4 4 . . 4 . 4 . 4 4 . . . 
        . . . . 4 . 4 4 . 4 . 4 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 4 . . . . . . . 
        . . . . . 4 4 4 4 4 4 4 . . . . 
        . . . . . 4 4 4 4 4 4 . . . . . 
        . . . 4 4 4 1 4 4 1 4 4 4 . . . 
        . . . . 4 4 1 4 4 1 4 4 . . . . 
        . . . 4 4 4 9 4 4 9 4 4 4 4 . . 
        . . . . 4 4 9 4 4 9 4 4 . . . . 
        . . . 4 4 4 4 4 4 4 4 4 4 . . . 
        . . . . 4 4 4 4 4 4 4 4 . . . . 
        . . . . 4 4 4 4 4 4 4 4 . . . . 
        . . . . 4 . 4 4 4 4 4 . . . . . 
        . . . . . . . 4 . 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 4 4 4 4 4 4 . . . . . 
        . . . . . 4 4 4 4 4 4 . . . . . 
        . . . . 4 4 1 4 4 1 4 4 . . . . 
        . . . . 4 4 1 4 4 1 4 4 . . . . 
        . . . . 4 4 9 4 4 9 4 4 . . . . 
        . . . . 4 4 9 4 4 9 4 4 . . . . 
        . . . . 4 4 4 4 4 4 4 4 . . . . 
        . . . . 4 4 4 4 4 4 4 4 . . . . 
        . . . . 4 4 4 4 4 4 4 4 . . . . 
        . . . . . . 4 . 4 . 4 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    true
    )
}
function food () {
    for (let value of tiles.getTilesByType(assets.tile`CoinFoodPac-Man`)) {
        coin = sprites.create(assets.image`foodpacman`, SpriteKind.Food)
        animation.runImageAnimation(
        coin,
        assets.animation`foodpacmananimation`,
        100,
        true
        )
        tiles.placeOnTile(coin, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`dangeroustilelevel1`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.over(true)
})
info.onCountdownEnd(function () {
	
})
function level3Pacman () {
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    tiles.setCurrentTilemap(tilemap`level3pacmantilemap`)
    maincharacterPacman()
    Pacman()
    food()
    PacMan.setPosition(25, 25)
}
function ghost () {
    animation.runImageAnimation(
    Ghost,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 3 3 3 . . . . . . 
        . . . . . 3 3 3 3 3 3 3 . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . 3 3 3 1 3 3 1 3 3 3 . . . 
        . . . 3 3 3 1 3 3 1 3 3 3 . . . 
        . . 3 3 3 3 9 3 3 9 3 3 3 3 . . 
        . . . 3 3 3 9 3 3 9 3 3 3 3 . . 
        . . 3 3 3 3 3 3 3 3 3 3 3 . . . 
        . . . 3 3 3 3 3 3 3 3 3 3 3 . . 
        . . 3 3 3 3 3 3 3 3 3 3 3 . . . 
        . . 3 3 3 3 3 3 3 3 3 3 3 . . . 
        . . . 3 3 3 3 3 3 3 3 3 3 . . . 
        . . . . 3 . 3 3 . 3 . 3 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 3 3 3 . . . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . . 3 3 1 3 3 1 3 3 . . . . 
        . . . . 3 3 1 3 3 1 3 3 3 . . . 
        . . . 3 3 3 9 3 3 9 3 3 . . . . 
        . . . 3 3 3 9 3 3 9 3 3 3 . . . 
        . . . . 3 3 3 3 3 3 3 3 3 . . . 
        . . . 3 3 3 3 3 3 3 3 3 3 . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . 3 3 3 3 3 3 3 3 3 3 . . . 
        . . . 3 . 3 . 3 . 3 . 3 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 3 3 3 . . . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . . 3 3 1 3 3 1 3 3 . . . . 
        . . . . 3 3 1 3 3 1 3 3 . . . . 
        . . . . 3 3 9 3 3 9 3 3 . . . . 
        . . . . 3 3 9 3 3 9 3 3 . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 3 3 3 . . . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . 3 3 3 3 3 3 3 . . . . 
        . . . . 3 3 1 3 3 1 3 . . . . . 
        . . . . 3 3 1 3 3 1 3 3 . . . . 
        . . . . . 3 9 3 3 9 3 . . . . . 
        . . . . 3 3 9 3 3 9 3 3 . . . . 
        . . . . 3 3 3 3 3 3 3 . . . . . 
        . . . . . 3 3 3 3 3 3 3 . . . . 
        . . . . 3 3 3 3 3 3 3 . . . . . 
        . . . . 3 3 . 3 3 . 3 3 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 . . 3 . . . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . 3 3 3 3 3 3 3 . . . . 
        . . . . 3 3 1 3 3 1 3 . . . . . 
        . . . . 3 3 1 3 3 1 3 3 . . . . 
        . . . . . 3 9 3 3 9 3 . . . . . 
        . . . . 3 3 9 3 3 9 3 3 . . . . 
        . . . . 3 3 3 3 3 3 3 . . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . 3 . 3 . 3 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    150,
    true
    )
}
function maincharacterChicken () {
    Chicken = sprites.create(assets.image`chickenmaincharacter`, SpriteKind.Player)
    scene.cameraFollowSprite(Chicken)
    controller.moveSprite(Chicken, 100, 100)
}
function maincharacterPacman () {
    PacMan = sprites.create(assets.image`pacmanmaincharacter`, SpriteKind.Player)
    scene.cameraFollowSprite(PacMan)
    controller.moveSprite(PacMan, 100, 100)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.over(true, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    info.stopCountdown()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`goincoldlevel1`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`goldcoingrasslevel1`)
    for (let value of tiles.getTilesByType(assets.tile`dangeroustilelevel1`)) {
        tiles.setTileAt(value, assets.tile`goldcoingrasslevel1`)
        tiles.setWallAt(value, true)
    }
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
function level1Chicken () {
    scene.setBackgroundImage(assets.image`level1background`)
    tiles.setCurrentTilemap(tilemap`level1tilemap`)
    game.setDialogFrame(assets.image`dialogue2`)
    game.showLongText("Your first challenge is to avoid!", DialogLayout.Bottom)
    game.showLongText("Do not touch the black-lined tiles", DialogLayout.Bottom)
    game.showLongText("And do not let the owl get you!", DialogLayout.Bottom)
    game.showLongText("Make sure to collect as much yellow corn as possible!", DialogLayout.Bottom)
    maincharacterChicken()
    Chicken.setPosition(5, 37)
    Owl = sprites.create(assets.image`owlenemylevel1`, SpriteKind.Enemy)
    Owl.setBounceOnWall(false)
    Owl.setPosition(20, 97)
    Owl.follow(Chicken, 45)
    chicken()
    owl()
}
function level1Pacman () {
    scene.setBackgroundImage(assets.image`background5`)
    tiles.setCurrentTilemap(tilemap`level5`)
    maincharacterPacman()
    Pacman()
    food()
    PacMan.setPosition(25, 25)
    info.startCountdown(45)
}
function ghost3 () {
    animation.runImageAnimation(
    Ghost3,
    assets.animation`ghost3enemypacman`,
    200,
    true
    )
}
function owl () {
    animation.runImageAnimation(
    Owl,
    assets.animation`owlenemyanimationlevel1`,
    200,
    true
    )
}
function level2Chicken () {
    scene.setBackgroundImage(assets.image`level2background`)
    tiles.setCurrentTilemap(tilemap`level2`)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
