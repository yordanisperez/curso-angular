import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dir-ng-model',
  templateUrl: './dir-ng-model.component.html',
  styleUrls: ['./dir-ng-model.component.css']
})
export class DirNgModelComponent implements OnInit {
  title = 'dirNgModel';
  nombre = '';
  nombre2 = '';
  cambiaNombre(event:KeyboardEvent) {
    this.nombre = this.nombre.toLowerCase();
    this.nombre2 = this.nombre.toUpperCase();
  }
  cambiaNombre2(event:KeyboardEvent) {
    this.nombre2 = this.nombre2.toUpperCase();
    this.nombre = this.nombre2.toLowerCase();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
