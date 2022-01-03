import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aplicativo-plantilla',
  templateUrl: './aplicativo-plantilla.component.html',
  styleUrls: ['./aplicativo-plantilla.component.css']
})
export class AplicativoPlantillaComponent implements OnInit {
  ci:string='';
  enviado:boolean;
  constructor() {
    this.enviado=false;
   }

  ngOnInit(): void {
  }
  onSubmit(){
    this.enviado=true;
  }
}
