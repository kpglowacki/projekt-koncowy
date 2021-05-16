import { Pilot } from "./pilot";
import { SpaceShip } from "./space-ship";

export class SpaceBomberShip extends SpaceShip{
constructor(pilot?: Pilot){
    super('Bombowiec','/assets/space_ship_2.png', pilot)
}
}
