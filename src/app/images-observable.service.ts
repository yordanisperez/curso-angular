import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Image, SelImage } from './aplicativo-vii/image.model';

@Injectable({
  providedIn: 'root'
})
export class ImagesObservableService {
  private __images: any;
  private __image = ""
  constructor(private http: HttpClient) {

    this.__images = this.http.get<Image[]>('http://localhost:3000/images')
      .pipe(map((it) => {
        console.log(`map:${JSON.stringify(it)}`);
        return it.map((img) => img.image)
      }))

    this.http.get<SelImage>('http://localhost:3000/selimg')
      .subscribe(data => {
        this.__image = data.image;
        console.log(data)
      });
  }



  get images(): any {
    return this.__images;
  };

  get image() {
    return this.__image;
  };

  set image(image) {
    this.http.put<SelImage>('http://localhost:3000/selimg', { "image": image })
      .subscribe(data => console.log(data));
    this.http.get<SelImage>('http://localhost:3000/selimg')
      .subscribe(data => {
        this.__image = data.image;
        console.log(data)
      });
  };
}
