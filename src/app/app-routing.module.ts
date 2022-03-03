import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgenciaComponent } from './agencia/agencia.component';
import { CrearAgenciaComponent } from './crear-agencia/crear-agencia.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path: '', component: AgenciaComponent},
  {path: 'crear-agencia', component: CrearAgenciaComponent},
  {path: 'crear-agencia/:id', component: CrearAgenciaComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
