import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TipoPagoInterface } from '../interfaces/tipo-pago/tipo-pago.module';

@Injectable({
  providedIn: 'root'
})
export class TipoPagoService {

  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/TipoPago/listarTipoPago';

  constructor(
    private http: HttpClient
  ) { }

  getTipoPagos(): Observable<TipoPagoInterface[]>{
    return this.http.get<TipoPagoInterface[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  getTipoPago(id: number): Observable<TipoPagoInterface>{
    return this.http.get<TipoPagoInterface>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  deleteTipoPago(id: number): Observable<void>{
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }

  addTipoPago(TipoPago: TipoPagoInterface): Observable<TipoPagoInterface>{
    return this.http.post<TipoPagoInterface>(`${this.myAppUrl}${this.myApiUrl}`, TipoPago);
  }

  updateTipoPago(id:number, TipoPago: TipoPagoInterface): Observable<TipoPagoInterface>{
    return this.http.put<TipoPagoInterface>(`${this.myAppUrl}${this.myApiUrl}${id}`, TipoPago);
  }
  
}
