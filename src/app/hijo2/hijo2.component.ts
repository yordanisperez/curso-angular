import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo2.component.html',
  styleUrls: ['./hijo2.component.css']
})
export class Hijo2Component implements OnInit {
  @Input() image = ''
  constructor() { }

  ngOnInit(): void {
  }

}
