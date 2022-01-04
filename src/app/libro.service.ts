import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { LIBROS } from './libro-lista/mocks';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor(private loggerService: LoggerService) { }
  getLibros() {
    this.loggerService.log("Llamada realizada sobre LibroService.getLibros");
  return LIBROS;
}
}
