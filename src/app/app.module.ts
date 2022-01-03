import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FiltrarCaracteres } from './form-intro/validacaracteres.directiva';

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
import { DirNgStyleComponent } from './dir-ng-style/dir-ng-style.component';
import { Hijo1Component } from './hijo1/hijo1.component';
import { Hijo2Component } from './hijo2/hijo2.component';
import { FormIntroComponent } from './form-intro/form-intro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { DivisionEnteraPipe } from './division-entera.pipe';
import { CiToDatePipe } from './ci-to-date.pipe';
import { AplicativoReactivoComponent } from './aplicativo-reactivo/aplicativo-reactivo.component';



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
    DirNgModelComponent,
    DirNgStyleComponent,
    Hijo1Component,
    Hijo2Component,
    FormIntroComponent,
    FiltrarCaracteres,
    FormReactiveComponent,
    DivisionEnteraPipe,
    CiToDatePipe,
    AplicativoReactivoComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
