import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dir-ng-style',
  templateUrl: './dir-ng-style.component.html',
  styleUrls: ['./dir-ng-style.component.css']
})
export class DirNgStyleComponent implements OnInit {
  title = 'dirNgStyle';
  color = 'blue';
  hayLetraGrande: boolean = false;
  hayColorFondo: boolean = false;
  hayLetraColor: boolean = false;
  hayLetraItalica: boolean = false;
  defineEstilos() {
    let styles = {
      'font-size': this.hayLetraGrande ? '300%' : 'initial',
      'background-color': this.hayColorFondo ? '#58FA58' :
        '#FFFFFF',
      'color': this.hayLetraColor ? 'red' : 'black',
      'font-style': this.hayLetraItalica ? 'italic' : 'normal'
    };
    return styles;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
