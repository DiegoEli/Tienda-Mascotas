export interface ProductoInterface {
  idProducto: number,
  descripcion?: string,
  idCategoria: number,
  nombreCategoria?: string,
  stock: number,
  precioCosto: number,
  precioVenta: number,
  rutaFoto?: string,
  estado: boolean,
}
