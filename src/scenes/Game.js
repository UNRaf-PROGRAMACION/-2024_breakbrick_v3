import { Scene } from "phaser";

// import class entitities
import { Paddle } from "../entities/Paddle";

export class Game extends Scene {
  constructor() {
    super("Game");
  }

  create() {
    // instanciar una nueva paleta.
    // crea un nuevo objeto
    // el this, aca, hace referencia a la escena
    this.paddle = new Paddle(this, 400, 550, 100, 20, 0xffffff, 1);
  }
}
