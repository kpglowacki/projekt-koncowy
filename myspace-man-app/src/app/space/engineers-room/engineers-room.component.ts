import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderFromValue } from '../order-from-value';
import { SpaceShipType } from '../space-ship-type.enum';

interface ShipType {
  label: string,
  value: SpaceShipType
}

@Component({
  selector: 'app-engineers-room',
  templateUrl: './engineers-room.component.html',
  styleUrls: ['./engineers-room.component.css']
})
export class EngineersRoomComponent implements OnInit {

  spaceShipTypes: ShipType[]= [
    {label: 'Myśliwiec', value: SpaceShipType.Figther},
    {label: 'Bombowiec', value: SpaceShipType.Bomber}
  ]
form = new FormGroup({
  shipType: new FormControl(SpaceShipType.Figther,{
     validators: [Validators.required]
  }),
  shipCount: new FormControl(1,{
    validators: [Validators.required, Validators.min(1), Validators.max(5)]
  }) 
})
  constructor() { }

  ngOnInit(): void {
  }
  orderSpaceShip(formValue: OrderFromValue){
    console.log(formValue)
  }
}
