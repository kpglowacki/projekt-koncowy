import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderFromValue } from '../order-from-value';
import { SpaceShip } from '../space-ship';
import { SpaceShipType } from '../space-ship-type.enum';
import { SpaceShipService } from '../space-ship.service';

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
  @Output() shipProduced = new EventEmitter<SpaceShip>();
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
isProducing = false;
  constructor( private spaceShipService: SpaceShipService) { }

  ngOnInit(): void {
  }
  orderSpaceShip(formValue: OrderFromValue){
    this.isProducing = true;
    this.spaceShipService.produceShips(formValue).subscribe({
      next: (ship) => this.shipProduced.emit(ship),
      complete: () => this.isProducing = false
    })
  }
}
