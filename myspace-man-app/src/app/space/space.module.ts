import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpaceRoutingModule } from './space-routing.module';
import { HangarComponent } from './hangar/hangar.component';
import { SpaceShipComponent } from './space-ship/space-ship.component';
import { PilotRoomComponent } from './pilot-room/pilot-room.component';
import { PilotComponent } from './pilot/pilot.component';


@NgModule({
  declarations: [
    HangarComponent,
    SpaceShipComponent,
    PilotRoomComponent,
    PilotComponent
  ],
  exports:[
    HangarComponent
  ],
  imports: [
    CommonModule,
    SpaceRoutingModule  
  ]
})
export class SpaceModule { }
