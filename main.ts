scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLadder, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterSouth2, function (sprite, location) {
    game.over(false)
})
let mySprite = sprites.create(img`
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . 5 . . f . . 5 . . . . . 
    . . . 5 . . . f f 5 . . . . . . 
    . . 5 . . . . 5 5 . . . . . . . 
    . . 5 . . . 5 . . . . . . . . . 
    . . 5 . . . . 5 . . . . . . . . 
    . . 5 . . . . . 5 . . . . . . . 
    . . . 5 . . . . . 5 . . . . . . 
    . . . . 5 . . . . . 5 . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tilemap`level_0`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairWest)
scene.cameraFollowSprite(mySprite)
info.startCountdown(15)
let myEnemy = sprites.create(assets.image`myEnemy`, SpriteKind.Enemy)
tiles.placeOnRandomTile(myEnemy, sprites.dungeon.floorLight3)
myEnemy.follow(mySprite, 60)
