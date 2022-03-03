export class Agencia {
  toLowerCase() {
    throw new Error('Method not implemented.');
  }
  constructor(
    public agencia: string,
    public distrito: string,
    public provincia: string,
    public departamento: string,
    public direccion: string,
    public lat: number,
    public lon: number
  ) {}
}
