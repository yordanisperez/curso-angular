import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { Hijoimagen1Component } from './hijoimagen1/hijoimagen1.component';
import { Hijoimagen2Component } from './hijoimagen2/hijoimagen2.component';
import { Hijoimagen3Component } from './hijoimagen3/hijoimagen3.component';
import { AplicativoVIComponent } from './aplicativo-vi/aplicativo-vi.component';

const appRoutes: Routes = [
  { path: 'imagen1', component: Hijoimagen1Component },
  { path: 'imagen2', component: Hijoimagen2Component },
  { path: 'imagen3', component: Hijoimagen3Component },
  { path: '**', component: NotFoundComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    Hijoimagen1Component,
    Hijoimagen2Component,
    Hijoimagen3Component,
    AplicativoVIComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
