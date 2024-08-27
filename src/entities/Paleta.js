export class Paddle extends Phaser.GameObjects.Rectangle {
  constructor(scene, x, y, width, height, color, alpha) {
    super(scene, x, y, width, height, color, alpha);

    scene.add.existing(this);
    // this en este contexto es la instancia de la clase Paleta
  }
}
