import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UsuarioInterface } from '../interfaces/usuario/usuario.module';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/Usuario/';

  constructor(
    private http: HttpClient
  ) { }

  getUsuarios(): Observable<UsuarioInterface[]>{
    return this.http.get<UsuarioInterface[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  getUsuario(id: number): Observable<UsuarioInterface>{
    return this.http.get<UsuarioInterface>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  deleteUsuario(id: number): Observable<void>{
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }

  addUsuario(Usuario: UsuarioInterface): Observable<UsuarioInterface>{
    return this.http.post<UsuarioInterface>(`${this.myAppUrl}${this.myApiUrl}`, Usuario);
  }

  updateUsuario(id:number, Usuario: UsuarioInterface): Observable<UsuarioInterface>{
    return this.http.put<UsuarioInterface>(`${this.myAppUrl}${this.myApiUrl}${id}`, Usuario);
  }
  
}
