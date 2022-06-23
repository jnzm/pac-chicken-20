scene.onOverlapTile(SpriteKind.Player, assets.tile`yellowcornlevel1winplace`, function (sprite, location) {
    game.over(true, effects.confetti)
})
function Pacman () {
    animation.runImageAnimation(
    PacMan,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . 5 5 5 5 5 5 5 . . . . 
        . . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . 5 5 5 5 5 5 5 5 5 . . . . 
        . . 5 5 5 5 5 5 5 5 5 . . . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . 5 5 5 5 5 5 5 . . . . 
        . . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . 5 5 5 5 5 5 5 . . . . 
        . . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . 5 5 5 5 5 5 5 5 5 . . . . 
        . . 5 5 5 5 5 5 5 5 5 . . . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    150,
    true
    )
}
function chicken () {
    animation.runImageAnimation(
    Chicken,
    assets.animation`chickenanimationlevel1`,
    200,
    true
    )
}
function food () {
    for (let value of tiles.getTilesByType(assets.tile`CoinFoodPac-Man`)) {
        coin = sprites.create(img`
            d d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d d 
            d d d d d 5 5 5 5 5 d d d d d d 
            d d d d d 5 5 5 5 5 d d d d d d 
            d d d d d 5 5 5 5 5 d d d d d d 
            d d d d d 5 5 5 5 5 d d d d d d 
            d d d d d 5 5 5 5 5 d d d d d d 
            d d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d d 
            `, SpriteKind.Food)
        animation.runImageAnimation(
        coin,
        [img`
            d d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d d 
            d d d d d 5 5 5 5 5 d d d d d d 
            d d d d d 5 5 5 5 5 d d d d d d 
            d d d d d 5 5 5 5 5 d d d d d d 
            d d d d d 5 5 5 5 5 d d d d d d 
            d d d d d 5 5 5 5 5 d d d d d d 
            d d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d d 
            d d d d d d d d d d d d d d d d 
            `,img`
            . . . . . . . . . . . . . . . . 
            . d d d d d d d d d d d d d d . 
            . d d d d d d d d d d d d d d . 
            . d d d d d d d d d d d d d d . 
            . d d d d d d d d d d d d d d . 
            . d d d d 5 5 5 5 5 d d d d d . 
            . d d d d 5 5 5 5 5 d d d d d . 
            . d d d d 5 5 5 5 5 d d d d d . 
            . d d d d 5 5 5 5 5 d d d d d . 
            . d d d d 5 5 5 5 5 d d d d d . 
            . d d d d d d d d d d d d d d . 
            . d d d d d d d d d d d d d d . 
            . d d d d d d d d d d d d d d . 
            . d d d d d d d d d d d d d d . 
            . d d d d d d d d d d d d d d . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . d d d d d d d d d d d d . . 
            . . d d d d d d d d d d d d . . 
            . . d d d d d d d d d d d d . . 
            . . d d d 5 5 5 5 5 d d d d . . 
            . . d d d 5 5 5 5 5 d d d d . . 
            . . d d d 5 5 5 5 5 d d d d . . 
            . . d d d 5 5 5 5 5 d d d d . . 
            . . d d d 5 5 5 5 5 d d d d . . 
            . . d d d d d d d d d d d d . . 
            . . d d d d d d d d d d d d . . 
            . . d d d d d d d d d d d d . . 
            . . d d d d d d d d d d d d . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . d d d d d d d d d d d d . . 
            . . d d d d d d d d d d d d . . 
            . . d d d d d d d d d d d d . . 
            . . d d d d d d d d d d d d . . 
            . . d d d d 5 5 5 d d d d d . . 
            . . d d d d 5 5 5 d d d d d . . 
            . . d d d d 5 5 5 d d d d d . . 
            . . d d d d d d d d d d d d . . 
            . . d d d d d d d d d d d d . . 
            . . d d d d d d d d d d d d . . 
            . . d d d d d d d d d d d d . . 
            . . d d d d d d d d d d d d . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . d d d d d d d d d . . . . 
            . . . d d d d d d d d d . . . . 
            . . . d d d d d d d d d . . . . 
            . . . d d d d d d d d d . . . . 
            . . . d d d 5 5 5 d d d . . . . 
            . . . d d d 5 5 5 d d d . . . . 
            . . . d d d d d d d d d . . . . 
            . . . d d d d d d d d d . . . . 
            . . . d d d d d d d d d . . . . 
            . . . d d d d d d d d d . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
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
    coin.destroy()
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
    scene.setBackgroundImage(assets.image`Pacmanlevel1`)
    tiles.setCurrentTilemap(tilemap`level4`)
    maincharacterPacman()
    PacMan.setPosition(44, 40)
    Pacman()
    food()
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
let Owl: Sprite = null
let coin: Sprite = null
let Chicken: Sprite = null
let PacMan: Sprite = null
info.setScore(0)
level1Pacman()
