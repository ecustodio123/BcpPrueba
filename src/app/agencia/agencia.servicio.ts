import { Subject } from 'rxjs';
import { Agencia } from './agencia.model';

export class AagenciaServicio {
  constructor() {
    this.agenciasChange.subscribe((val) => {
      this.showAgencias = val;
    });
  }

  showAgencias: Agencia[] = [];
  agenciasChange: Subject<Agencia[]> = new Subject<Agencia[]>();

  agencias: Agencia[] = [
    new Agencia(
      'Las Flores',
      'San Juan De Lurigancho',
      'Lima',
      'Lima',
      'Las Flores de Primavera 1487',
      -77.01232817,
      -12.0046896
    ),
    new Agencia(
      'Punchana',
      'Punchana',
      'Maynas',
      'Loreto',
      'Av. La Marina N° 944',
      -73.240647,
      -3.731367
    ),
    new Agencia(
      'Conquistadores',
      'San Isidro',
      'Lima',
      'Lima',
      'Av. Conquistadores 968',
      -77.03735314,
      -12.10568371
    ),
    new Agencia(
      'Salvador Allende',
      'Villa Maria del Triunfo',
      'Lima',
      'Lima',
      'Av. Salvador Allende 468 – Villa María del Triunfo',
      -76.957646,
      -12.158153
    ),
    new Agencia(
      'Siglo XX (030)',
      'Arequipa',
      'Arequipa',
      'Arequipa',
      'Av. Siglo XX N°122 Cercado de Arequipa',
      -71.530671,
      -16.399615
    ),
    new Agencia(
      'Constructores',
      'La Molina',
      'Lima',
      'Lima',
      'Av Constructores Cuadra 1 Mz. D Lote 5',
      -76.957802,
      -12.067233
    ),
    new Agencia(
      'Victor Larco',
      'Trujillo',
      'Trujillo',
      'La Libertad',
      'Av. Víctor Larco Herrera N° 1631 Urbanización Fátima',
      -79.042123,
      -8.128624
    ),
    new Agencia(
      'Socabaya',
      'Socabaya',
      'Arequipa',
      'Arequipa',
      'Av. San Martín de Socabaya N° 307 Socabaya',
      -71.529979,
      -16.438285
    ),
    new Agencia(
      'Colonial',
      'Callao',
      'Callao',
      'Lima',
      'Av. Oscar Benavides Mz. V Lotes 38 y 39',
      -77.094569,
      -12.05266
    ),
    new Agencia(
      'Bagua',
      'Bagua Chica',
      'Bagua',
      'Amazonas',
      'Jr. Comercio  N°  532 (C-5 Mz 220 Lote 31)',
      -78.53162,
      -5.639817
    ),
    new Agencia(
      'El Porvenir',
      'El Porvenir',
      'Trujillo',
      'La Libertad',
      'Jr. Micaela Bastidas N° 1201',
      -79.00303884,
      -8.08513996
    ),
    new Agencia(
      'Faber Castell',
      'Ate',
      'Lima',
      'Lima',
      'Av. La Molina N. 161',
      -76.963932,
      -12.055857
    ),
    new Agencia(
      'Real Plaza Salaverry',
      'Jesús María',
      'Lima',
      'Lima',
      'Av. Salaverry Cdra. 23 y 24',
      -77.051717,
      -12.089713
    ),
    new Agencia(
      'Tottus Sullana',
      'Sullana',
      'Sullana',
      'Piura',
      'Av. Panamericana N°461 Urbanización Santa Rosa',
      -80.697197,
      -4.903301
    ),
    new Agencia(
      'Open Plaza Pucallpa',
      'Calleria',
      'Coronel Portillo',
      'Ucayali',
      'Av. Centenario – Av. Juan Vargas',
      -74.566592,
      -8.387681
    ),
    new Agencia(
      'Yanahuara',
      'Yanahuara',
      'Arequipa',
      'Arequipa',
      'Av. Ejército  / Urb. Jardín Mz. A Lt. 03',
      -71.542328,
      -16.391764
    ),
    new Agencia(
      'De la Fuente',
      'Miraflores',
      'Lima',
      'Lima',
      'Av. 28 de Julio 1121',
      -77.02138969,
      -12.13000805
    ),
    new Agencia(
      'Naylamp',
      'San Juan de Lurigancho',
      'Lima',
      'Lima',
      'Av. Gran Chimú 568',
      -77.00450896,
      -12.0268364
    ),
    new Agencia(
      'Próceres',
      'San Juan De Lurigancho',
      'Lima',
      'Lima',
      'Av. Proceres de la Independencia N° 2062 - SJL',
      -77.009044,
      -11.998248
    ),
    new Agencia(
      'Real Plaza Cajamarca',
      'El Porvenir',
      'Lima',
      'Lima',
      'Jr. Micaela Bastidas N° 1201',
      -79.00303884,
      -8.08513996
    ),
    new Agencia(
      'El Porvenir',
      'Cajamarca',
      'Cajamarca',
      'Cajamarca',
      'Av. vía de Evitamiento Norte',
      -78.506083,
      -7.154024
    ),
    new Agencia(
      'Hersil',
      'Ate',
      'Lima',
      'Lima',
      'Av. Los Frutales 220',
      -76.96720247,
      -12.05953566
    ),
    new Agencia(
      'Owens Illinois',
      'Lurín',
      'Lima',
      'Lima',
      'S/N Pampas De Mamay Lote A-2-3',
      -76.831697,
      -12.297813
    ),
    new Agencia(
      'Enotria',
      'Ate',
      'Lima',
      'Lima',
      'Av. Nicolas Ayllon 2890',
      -76.972601,
      -12.058336
    ),
    new Agencia(
      'Real Plaza Cusco',
      'Cusco',
      'Cusco',
      'Cusco',
      'Av. De la Cultura Lt. A-2',
      -71.950088,
      -13.523304
    ),
  ];

  agregarAgencia(agencia: Agencia) {
    this.agencias.push(agencia);
  }

  encontrarAgencia(index: number) {
    let agencia: Agencia = this.agencias[index];
    return agencia;
  }

  modificarAgencia(index: number, agencia: Agencia) {
    let agencia1 = this.agencias[index];
    agencia1.agencia = agencia.agencia;
    agencia1.provincia = agencia.provincia;
    agencia1.departamento = agencia.departamento;
    agencia1.distrito = agencia.distrito;
    agencia1.direccion = agencia.direccion;
    agencia1.lat = agencia.lat;
    agencia1.lon = agencia.lon;
  }

  buscarAgencia(text: string) {
    const filter = this.agencias.filter((agencia) =>
      agencia.agencia.toLowerCase().includes(text.toLowerCase())
    );
    this.agenciasChange.next(filter);
  }


}
