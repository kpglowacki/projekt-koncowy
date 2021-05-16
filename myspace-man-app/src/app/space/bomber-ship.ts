import { Pilot } from "./pilot";
import { SpaceShip } from "./space-ship";

export class BomberShip extends SpaceShip {
    constructor(pilot?: Pilot){
        super('Bomber','/assets/space_ship_2.png', pilot)
      }
}
