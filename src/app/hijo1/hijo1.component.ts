import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-hijo1',
  templateUrl: './hijo1.component.html',
  styleUrls: ['./hijo1.component.css']
})
export class Hijo1Component implements OnInit {

  @Output() imageSelectOutput: EventEmitter<string> = new EventEmitter<string>();
  imageSelect=''
  images = ["assets/imagenes/imagen1.jpg", "assets/imagenes/imagen2.jpg", "assets/imagenes/imagen3.jpg"]
  constructor() { }
  onPropagar() {

    this.imageSelectOutput.emit(this.imageSelect);
  }
  ngOnInit(): void {
  }

}
