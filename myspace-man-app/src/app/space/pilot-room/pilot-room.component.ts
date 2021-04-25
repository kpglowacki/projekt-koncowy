import { Component, OnInit } from '@angular/core';
import { Pilot } from '../pilot';

@Component({
  selector: 'app-pilot-room',
  templateUrl: './pilot-room.component.html',
  styleUrls: ['./pilot-room.component.css']
})
export class PilotRoomComponent implements OnInit {

pilots: Pilot[]=[];
  selectedPilot: Pilot = null;
  constructor() { }

  ngOnInit():void {
    this.pilots.push(new Pilot('Alice Kowal','/assets/pilot_1.png'));
    this.pilots.push(new Pilot('Bob Kowal'));
    console.log('pilots', this.pilots)
  }
  select(pilot: Pilot): void{
    this.selectedPilot = pilot;
  }
}
