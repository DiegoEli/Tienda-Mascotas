import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClienteInterface } from '../interfaces/cliente/cliente.module';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/Cliente/';

  constructor(
    private http: HttpClient
  ) { }

  getClientes(): Observable<ClienteInterface[]>{
    return this.http.get<ClienteInterface[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  getCliente(id: number): Observable<ClienteInterface>{
    return this.http.get<ClienteInterface>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  deleteCliente(id: number): Observable<void>{
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }

  addCliente(Cliente: ClienteInterface): Observable<ClienteInterface>{
    return this.http.post<ClienteInterface>(`${this.myAppUrl}${this.myApiUrl}`, Cliente);
  }

  updateCliente(id:number, Cliente: ClienteInterface): Observable<ClienteInterface>{
    return this.http.put<ClienteInterface>(`${this.myAppUrl}${this.myApiUrl}${id}`, Cliente);
  }

}
