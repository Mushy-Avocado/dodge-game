function preload () {
 
}

function create () {
  
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
