import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Agencia } from '../agencia/agencia.model';
import { AagenciaServicio } from '../agencia/agencia.servicio';

@Component({
  selector: 'app-crear-agencia',
  templateUrl: './crear-agencia.component.html',
  styleUrls: ['./crear-agencia.component.css'],
})
export class CrearAgenciaComponent implements OnInit {
  agenciaInput: string;
  provinciaInput: string;
  departamentoInput: string;
  distritoInput: string;
  direccionInput: string;
  latitudInput: number;
  longitudInput: number;
  index: number | undefined;

  constructor(
    private agenciaServicio: AagenciaServicio,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.agenciaInput = '';
    this.provinciaInput = '';
    this.departamentoInput = '';
    this.distritoInput = '';
    this.direccionInput = '';
    this.latitudInput = 0;
    this.longitudInput = 0;
    // this.index = 0;
  }

  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    if (this.index) {
      let agencia: Agencia = this.agenciaServicio.encontrarAgencia(this.index);
      this.agenciaInput = agencia.agencia;
      this.provinciaInput = agencia.provincia;
      this.departamentoInput = agencia.departamento;
      this.distritoInput = agencia.distrito;
      this.direccionInput = agencia.direccion;
      this.latitudInput = agencia.lat;
      this.longitudInput = agencia.lon;
    }
  }

  guardarAgencia() {
    let agencia1 = new Agencia(
      this.agenciaInput,
      this.distritoInput,
      this.provinciaInput,
      this.departamentoInput,
      this.direccionInput,
      this.latitudInput,
      this.longitudInput
    );
    if (this.index) {
      this.agenciaServicio.modificarAgencia(this.index, agencia1);
    } else {
      this.agenciaServicio.agregarAgencia(agencia1);
    }
    this.router.navigate(['']);
  }
}
