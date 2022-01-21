import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-prop',
  templateUrl: './cmp-prop.component.html',
  styleUrls: ['./cmp-prop.component.css']
})
export class CmpPropComponent implements OnInit {
  title = 'app works!';
  ponFondo = true;
  mostrar = true;
  habilitar = false;
  referencia = "http://www.google.com";
  constructor() { }

  ngOnInit(): void {
  }

}
