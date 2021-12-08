import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compo2',
  template:`
    <h1>
      compo2 inline-template works!!!!!!!
    </h1>
    <div >
      <button (click)="saludar()">Saludar</button><br>
      <h1>{{ texto }}</h1>
    </div>
  `,
  styleUrls: ['./compo2.component.css']
})
export class Compo2Component implements OnInit {
  texto: string;
  saludar() { this.texto = "Hola Mundo en compo2 inline-template"; }
  constructor() {
    this.texto=''
   }

  ngOnInit(): void {
  }

}
