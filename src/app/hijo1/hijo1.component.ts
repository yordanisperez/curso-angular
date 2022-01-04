import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { ImagesObservableService } from '../images-observable.service';


@Component({
  selector: 'app-hijo1',
  templateUrl: './hijo1.component.html',
  styleUrls: ['./hijo1.component.css']
})
export class Hijo1Component implements OnInit {



  constructor(public imageService:ImagesObservableService) { }
  /*onPropagar() {

   // this.imageSelectOutput.emit(this.imageSelect);
  }*/
  ngOnInit(): void {
  }

}
