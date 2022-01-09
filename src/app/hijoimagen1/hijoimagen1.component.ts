import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hijoimagen1',
  templateUrl: './hijoimagen1.component.html',
  styleUrls: ['./hijoimagen1.component.css']
})
export class Hijoimagen1Component implements OnInit {
  image:string ="assets/imagenes/imagen1.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
