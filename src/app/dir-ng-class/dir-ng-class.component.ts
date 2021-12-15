import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dir-ng-class',
  templateUrl: './dir-ng-class.component.html',
  styleUrls: ['./dir-ng-class.component.css']
})
export class DirNgClassComponent implements OnInit {
  title = 'dirNgClass';
  fondoAmarillo = false;
  letraGrande = false;
  checkFondo() {
    this.fondoAmarillo = !this.fondoAmarillo;
  }
  checkLetra() {
    this.letraGrande = !this.letraGrande;
  }
  asignaClases() {
    let classes = {
      fa: this.fondoAmarillo,
      lg: this.letraGrande
    };
    return classes;
  }




  constructor() { }

  ngOnInit(): void {
  }

}
