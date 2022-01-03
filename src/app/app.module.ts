import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';


import { CiToDatePipe } from './ci-to-date.pipe';

import { AplicativoPlantillaComponent } from './aplicativo-plantilla/aplicativo-plantilla.component';
import { ValidaCi } from './aplicativo-plantilla/validaCi.directiva';



@NgModule({
  declarations: [
    AppComponent,

    CiToDatePipe,

    AplicativoPlantillaComponent,
    ValidaCi,

  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
