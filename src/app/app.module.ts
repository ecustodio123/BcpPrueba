import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgenciaComponent } from './agencia/agencia.component';
import { CrearAgenciaComponent } from './crear-agencia/crear-agencia.component';
import { HeaderAgenciaComponent } from './header-agencia/header-agencia.component';
import { AagenciaServicio } from './agencia/agencia.servicio';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { AgmCoreModule } from '@agm/core';
import { MapaAgenciaComponent } from './mapa-agencia/mapa-agencia.component';

@NgModule({
  declarations: [
    AppComponent,
    AgenciaComponent,
    CrearAgenciaComponent,
    HeaderAgenciaComponent,
    ErrorComponent,
    MapaAgenciaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCsgF2DujQwhxR0w2VgXre7TUmlcXQgQO8'
    })
  ],
  providers: [AagenciaServicio],
  bootstrap: [AppComponent]
})
export class AppModule { }
