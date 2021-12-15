import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Compo1Component } from './compo1/compo1.component';
import { Compo2Component } from './compo2/compo2.component';
import { Compo3Component } from './compo3/compo3.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirNgClassComponent } from './dir-ng-class/dir-ng-class.component';
import { DirNgIfComponent } from './dir-ng-if/dir-ng-if.component';
import { DirNgForComponent } from './dir-ng-for/dir-ng-for.component';
import { DirNgSwitchComponent } from './dir-ng-switch/dir-ng-switch.component';
import { DirNgModelComponent } from './dir-ng-model/dir-ng-model.component';

@NgModule({
  declarations: [
    AppComponent,
    Compo1Component,
    Compo2Component,
    Compo3Component,
    DataBindingComponent,
    DirNgClassComponent,
    DirNgIfComponent,
    DirNgForComponent,
    DirNgSwitchComponent,
    DirNgModelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
