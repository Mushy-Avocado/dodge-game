var gameState = {}

function preload () {
 this.image.load('logo', 'https://github.com/Mushy-Avocado/testing/blob/main/github%20image.png')
}

function create () {
  gameState.logo = this.sprite.add(50, 50, 'logo')
}

const config = {
  width: 400,
  height: 400,
  backgroundColor: 0x2aa1d4,
  scene: {
    preload,
    create,
  }
}

const game = new Phaser.Game(config)
