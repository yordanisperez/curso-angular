import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesObservableService {
  private __images = ["assets/imagenes/imagen1.jpg", "assets/imagenes/imagen2.jpg", "assets/imagenes/imagen3.jpg"];
  private __image = "assets/imagenes/imagen1.jpg"
  constructor() { }

  get images(): Observable<string[]>{
    return of(this.__images);
  };

  get image() {
    return this.__image;
  };

  set image(image){
    this.__image = image;
  };
}
