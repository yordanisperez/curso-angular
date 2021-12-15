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
    "stock": 5,
    "cantidad": 0,
    "imagen": "assets/azul.jpg"
  }
  downCantidad(libro: any) {
    if (libro.cantidad > 0)
      libro.cantidad--;
  }
  upCantidad(libro: any) {
    if (libro.cantidad < libro.stock) libro.cantidad++;
  }

  getCoord(event: any) {
    console.log(event.clientX + ", " + event.
      clientY);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
