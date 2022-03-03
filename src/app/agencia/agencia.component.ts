import { Component, OnInit } from '@angular/core';
import { Agencia } from './agencia.model';
import { AagenciaServicio } from './agencia.servicio';

@Component({
  selector: 'app-agencia',
  templateUrl: './agencia.component.html',
  styleUrls: ['./agencia.component.css'],
})
export class AgenciaComponent implements OnInit {
  // agencias: Agencia[] = [];

  constructor(private agenciaServicio: AagenciaServicio) {}

  ngOnInit(): void {
    this.agenciaServicio.buscarAgencia('');
  }

  get agencias() {
    return this.agenciaServicio.showAgencias;
  }
}
