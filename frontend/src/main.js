const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 480,
  scene: {
    preload: preload,
    create: create
  }
};

const game = new Phaser.Game(config);

function preload() {
  // Placeholder for map tileset
}

function create() {
  this.add.text(20, 20, 'Caribou Gold: BC Map', { fontSize: '24px', color: '#fff' });
}
