import { Component, OnInit, ViewChild } from '@angular/core';
import { BomberShip } from '../bomber-ship';
import { FighterShip } from '../fighter-ship';
import { Pilot } from '../pilot';
import { PilotRoomComponent } from '../pilot-room/pilot-room.component';
import { SpaceShip } from '../space-ship';

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.css']
})
export class HangarComponent implements OnInit {
  @ViewChild(PilotRoomComponent) pilotRoom: PilotRoomComponent;
  spaceShips: SpaceShip[]=[];
  selectedPilot: Pilot = null;
  constructor() { }

  ngOnInit(): void {
    
  }
  assignPilot(spaceShip:SpaceShip):void{
    spaceShip.pilot = this.selectedPilot;
    this.pilotRoom.pilotLeave();
  }
  deassignPilot(spaceShip:SpaceShip):void{
    this.pilotRoom.pilotReturn(spaceShip.pilot);
    spaceShip.pilot = null
  }
}
