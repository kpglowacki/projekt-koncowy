import { Pilot } from "./pilot";
import { SpaceShip } from "./space-ship";

export class SpaceFighterShip extends SpaceShip{
    constructor(pilot?: Pilot){
        super('Niszczyciel', '/assets/space_ship_3.png', pilot)
    }
}
