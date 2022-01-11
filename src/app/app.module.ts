import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Hijo1Component } from './hijo1/hijo1.component';
import { Hijo2Component } from './hijo2/hijo2.component';
import { HttpClientModule } from '@angular/common/http'
import { ImagesObservableService } from './images-observable.service';
import { AplicativoVIIComponent } from './aplicativo-vii/aplicativo-vii.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    Hijo1Component,
    Hijo2Component,
    AplicativoVIIComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [ImagesObservableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
