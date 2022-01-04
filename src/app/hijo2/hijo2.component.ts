import { Component,Input,OnInit } from '@angular/core';
import { ImagesObservableService } from '../images-observable.service';

@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo2.component.html',
  styleUrls: ['./hijo2.component.css']
})
export class Hijo2Component implements OnInit {

  constructor(public imageService:ImagesObservableService) { }

  ngOnInit(): void {
  }

}
