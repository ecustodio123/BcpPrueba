import { Component, Input, OnInit } from '@angular/core';
import { AagenciaServicio } from '../agencia/agencia.servicio';

@Component({
  selector: 'app-header-agencia',
  templateUrl: './header-agencia.component.html',
  styleUrls: ['./header-agencia.component.css'],
})
export class HeaderAgenciaComponent implements OnInit {

  buscarInput: string;

  constructor( private agenciaServicio: AagenciaServicio) {
    this.buscarInput = '';
  }

  ngOnInit(): void {}

  buscarAgencia() {
    this.agenciaServicio.buscarAgencia(this.buscarInput);
  }
}
