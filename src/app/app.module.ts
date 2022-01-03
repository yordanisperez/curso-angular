import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { CiToDatePipe } from './ci-to-date.pipe';
import { AplicativoReactivoComponent } from './aplicativo-reactivo/aplicativo-reactivo.component';



@NgModule({
  declarations: [
    AppComponent,
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
