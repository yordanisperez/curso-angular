import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Libro } from '../libro-lista/libro.model';
import { LIBROS } from '../libro-lista/mocks';

@Component({
  selector: 'app-libro-detalle',
  templateUrl: './libro-detalle.component.html',
  styleUrls: ['./libro-detalle.component.css']
})
export class LibroDetalleComponent implements OnInit {
  libro?:Libro;
  constructor(private route: ActivatedRoute) {

   }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id_str=params.get('id')
      if (id_str)
      {
        let id = parseInt(id_str);
        this.libro = LIBROS.find(item => item.id === id);
      }
});
  }

}
