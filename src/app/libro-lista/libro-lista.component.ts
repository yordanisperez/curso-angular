import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { LibroObservableService } from '../libro-observable.service';
import { LibroService } from '../libro.service';
import { Libro } from './libro.model';
import { LIBROS } from './mocks';
@Component({
  selector: 'app-libro-lista',
  templateUrl: './libro-lista.component.html',
  styleUrls: ['./libro-lista.component.css']
})
export class LibroListaComponent implements OnInit {

  libros: Libro[] = [];
  observableSubs: any = null
  constructor(private libroObservableService: LibroObservableService) {

  }

  ngOnInit(): void {
    this.observableSubs = this.libroObservableService.getLibros()
      .subscribe(
        libros => this.libros = libros,
        error => console.log(error),
        () => console.log("this.libroObservableService.getLibros() FINALIZADO")
      );
  }
  ngOnDestroy() {
    if (this.observableSubs) this.observableSubs.unsubscribe();
  }
}
