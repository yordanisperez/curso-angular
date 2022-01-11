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
import { AplicativoPlantillaComponent } from './aplicativo-plantilla/aplicativo-plantilla.component';
import { ValidaCi } from './aplicativo-plantilla/validaCi.directiva';
import { LibroListaComponent } from './libro-lista/libro-lista.component';
import { LibroService } from './libro.service';
import { LoggerService } from './logger.service';
import { LibroObservableService } from './libro-observable.service';
import { ImagesObservableService } from './images-observable.service';
import { AutorListaComponent } from './autor-lista/autor-lista.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LibroDetalleComponent } from './libro-detalle/libro-detalle.component';
import { LibroOpinionesComponent } from './libro-opiniones/libro-opiniones.component';
import { LibroImagenesComponent } from './libro-imagenes/libro-imagenes.component';
import { Hijoimagen1Component } from './hijoimagen1/hijoimagen1.component';
import { Hijoimagen2Component } from './hijoimagen2/hijoimagen2.component';
import { Hijoimagen3Component } from './hijoimagen3/hijoimagen3.component';
import { AplicativoVIComponent } from './aplicativo-vi/aplicativo-vi.component';
import { HttpClientTestComponent } from './http-client-test/http-client-test.component';
import { AplicativoVIIComponent } from './aplicativo-vii/aplicativo-vii.component';

const appRoutes: Routes = [
  { path: 'imagen1', component: Hijoimagen1Component },
  { path: 'imagen2', component: Hijoimagen2Component },
  { path: 'imagen3', component: Hijoimagen3Component },
  { path: '**', component: NotFoundComponent }
  ];

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
    AplicativoPlantillaComponent,
    ValidaCi,
    LibroListaComponent,
    AutorListaComponent,
    LibroDetalleComponent,
    LibroOpinionesComponent,
    LibroImagenesComponent,
    Hijoimagen1Component,
    Hijoimagen2Component,
    Hijoimagen3Component,
    AplicativoVIComponent,
    HttpClientTestComponent,
    AplicativoVIIComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
  providers: [LibroService,LibroObservableService,LoggerService,ImagesObservableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
