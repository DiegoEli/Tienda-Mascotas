import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EstadoCivilInterface } from '../interfaces/estado-civil/estado-civil.module';

@Injectable({
  providedIn: 'root'
})
export class EstadoCivilService {
  
  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/EstadoCivil/';

  constructor(
    private http: HttpClient
  ) { }

  getEstadoCivils(): Observable<EstadoCivilInterface[]>{
    return this.http.get<EstadoCivilInterface[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  getEstadoCivil(id: number): Observable<EstadoCivilInterface>{
    return this.http.get<EstadoCivilInterface>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  deleteEstadoCivil(id: number): Observable<void>{
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }

  addEstadoCivil(EstadoCivil: EstadoCivilInterface): Observable<EstadoCivilInterface>{
    return this.http.post<EstadoCivilInterface>(`${this.myAppUrl}${this.myApiUrl}`, EstadoCivil);
  }

  updateEstadoCivil(id:number, EstadoCivil: EstadoCivilInterface): Observable<EstadoCivilInterface>{
    return this.http.put<EstadoCivilInterface>(`${this.myAppUrl}${this.myApiUrl}${id}`, EstadoCivil);
  }

}
