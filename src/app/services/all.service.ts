import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AllService {

  constructor( private http: HttpClient) { }

  Post(modelo: any, url: string): Observable<any> {
    const optionsHeader = { headers : new HttpHeaders({'Content-type':'application/json'})}
    return this.http.post<any>(url, modelo, optionsHeader)
      .map(res => res);
  }

  // Eliminar
  Delete(url: string):Observable<any> {
    const optionsHeader = { headers : new HttpHeaders({'Content-type':'application/json'})}
    return this.http.delete<any>(url, optionsHeader)
      .map(res => res);
  }
}
