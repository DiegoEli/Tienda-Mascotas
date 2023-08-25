import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductoInterface } from '../interfaces/producto/producto.module';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/Producto/';

  constructor(
    private http: HttpClient
  ) { }

  getProductos(): Observable<ProductoInterface[]>{
    return this.http.get<ProductoInterface[]>(`${this.myAppUrl}${this.myApiUrl}listarProductos`);
  }

  getProducto(id: number): Observable<ProductoInterface>{
    return this.http.get<ProductoInterface>(`${this.myAppUrl}${this.myApiUrl}obtenerProducto/${id}`);
  }

  deleteProducto(id: number): Observable<void>{
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }

  addProducto(Producto: ProductoInterface): Observable<ProductoInterface>{
    return this.http.post<ProductoInterface>(`${this.myAppUrl}${this.myApiUrl}`, Producto);
  }

  updateProducto(id:number, Producto: ProductoInterface): Observable<ProductoInterface>{
    return this.http.put<ProductoInterface>(`${this.myAppUrl}${this.myApiUrl}${id}`, Producto);
  }
  
}
