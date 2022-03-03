import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa-agencia',
  templateUrl: './mapa-agencia.component.html',
  styleUrls: ['./mapa-agencia.component.css'],
})
export class MapaAgenciaComponent implements OnInit {
  
  @Input() latitud: number;  
  @Input() longitud: number;  

  constructor() {}

  ngOnInit(): void {}
}
