import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoriaInterface } from '../interfaces/categoria/categoria.module';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  
  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/Categoria/';

  constructor(
    private http: HttpClient
  ) { }

  getCategorias(): Observable<CategoriaInterface[]>{
    return this.http.get<CategoriaInterface[]>(`${this.myAppUrl}${this.myApiUrl}listarCategorias`);
  }

  getCategoria(id: number): Observable<CategoriaInterface>{
    return this.http.get<CategoriaInterface>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  deleteCategoria(id: number): Observable<void>{
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }

  addCategoria(Categoria: CategoriaInterface): Observable<CategoriaInterface>{
    return this.http.post<CategoriaInterface>(`${this.myAppUrl}${this.myApiUrl}`, Categoria);
  }

  updateCategoria(id:number, Categoria: CategoriaInterface): Observable<CategoriaInterface>{
    return this.http.put<CategoriaInterface>(`${this.myAppUrl}${this.myApiUrl}${id}`, Categoria);
  }

}
