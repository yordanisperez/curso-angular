import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from './libro-lista/libro.model';
import { LIBROS } from './libro-lista/mocks';

@Injectable({
  providedIn: 'root'
})
export class LibroObservableService {
  //libros: Libro[] = [];
  constructor() { }

  getLibros(): Observable<Libro[]> {
    return new Observable<Libro[]>(observer => {
      let libros: Libro[] = [];
      observer.next([]);
      LIBROS.forEach((libro, index) => {
        setTimeout(() => {
          libros.push(libro);
          observer.next(libros);
        }, (index + 1) * 1500);
      });
      setTimeout(() => { observer.complete(); }, (LIBROS.length + 1) *
        1500);
    });
  }
}
