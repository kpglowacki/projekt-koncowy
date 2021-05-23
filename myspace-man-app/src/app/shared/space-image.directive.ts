import { Directive, HostBinding, HostListener } from '@angular/core';
import { setClassMetadata } from '@angular/core/src/r3_symbols';

@Directive({
  selector: '[appSpaceImage]'
})

export class SpaceImageDirective {
  zoom = 1.0;
  constructor() { }
  @HostBinding ('style.transform') get scale() {
    return `scale(${this.zoom})`
    }
  @HostListener('mousemove') zoomIn(){
    this.zoom += 0.005;
  }
  @HostListener('mouseout') zoomOut(){
    this.zoom = 1.0;
  }
}
