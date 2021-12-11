import { Container, Graphics, Sprite } from "pixi.js";


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