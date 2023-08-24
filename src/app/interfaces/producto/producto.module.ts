export interface ProductoInterface {
  IdProducto?: number,
  Descripcion: string,
  IdCategoria: number,
  Stock: number,
  PrecioCosto: number,
  PrecioVenta: number,
  Estado: boolean,
  CreadoDate: Date
}
