import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dir-ng-if',
  templateUrl: './dir-ng-if.component.html',
  styleUrls: ['./dir-ng-if.component.css']
})
export class DirNgIfComponent implements OnInit {
  title = 'dirNgIf';
  grupo1=false;
  grupo2=false;
  subgrupo11=false;
  subgrupo12=false;
  subgrupo21=false;
  subgrupo22=false;
  constructor() { }

  ngOnInit(): void {
  }

}
