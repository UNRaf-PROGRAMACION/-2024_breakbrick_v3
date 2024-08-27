export class Brick extends Phaser.GameObjects.Rectangle {
  constructor(scene, x, y, width, height, color, alpha) {
    super(scene, x, y, width, height, color, alpha);

    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.body.immovable = true;
    this.body.setCollideWorldBounds(true);
  }

  hit(ball, brick) {
    brick.destroy();
  }
}
