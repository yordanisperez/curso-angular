import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:"./app.component.html",
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample-angular';
  image=''
  procesaPropagar(img:string) {
    console.log(`Esta es la imagen ${img}`);
    this.image=img;
  }

}
