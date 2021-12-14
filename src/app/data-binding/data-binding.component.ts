import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  Libro = {
    "titulo": "Hamlet",
    "autor": "William Shakespeare",
    "precio": 21.30,
    "stock": 0,
    "cantidad": 0,
    "imagen":"assets/azul.jpg"
  }
  /*downCantidad(){
    if (libro.cantidad > 0 ) libro.cantidad--;
    }
    upCantidad(){
    if (libro.cantidad < libro.stock ) libro.cantidad++;
    }*/
  constructor() { }

  ngOnInit(): void {
  }

}
