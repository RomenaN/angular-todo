import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Currencies } from '../model/exchange.model';

@Injectable({
  providedIn: 'root',
})
export class ExchangeService {
  serverName: string = 'https://api.frankfurter.app';

  constructor(private http: HttpClient) {}

  getExchanges(): Observable<Currencies> {
    return this.http.get<Currencies>(this.serverName + '/currencies');
  }

  getDefaultExchange(fromCurr: string, toCurr: string): Observable<any> {
    return this.http.get<any>(
      `${this.serverName}/latest?from=${fromCurr}&to=${toCurr}`
    );
  }
}
