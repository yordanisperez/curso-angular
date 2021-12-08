import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compo3',
  templateUrl: './compo3.component.html',
  styles: [`
      p { font-size: xx-large ; background-color: yellow; }
      h1 { color: blue; }
  `
  ]
})
export class Compo3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
