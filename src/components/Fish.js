import { Container, Graphics, Sprite } from "pixi.js";

window.onload = function () {
  app = new PIXI.Application(
    {
      width: 800,
      height: 800,
      backgroundColor: 0xAAAAAA
    }
  );
  document.body.appendChild(app.view);
}
export default class Fish extends Sprite {
  constructor() {
    super();
    this.name = "fish";
    this.expand();
    this.contract();
  }
}
_expand() {

}
_contract() {
 let fish = new PIXI.Graphics();
  fish.interactive = true;
  fish.buttonMode = true;
}