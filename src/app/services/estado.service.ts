import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpEventType, HttpEvent, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Estado } from '../model/estado';
import { AllService } from './all.service';

@Injectable()
export class EstadoService {

  url: string = 'http://localhost:49465/api/Estado';

  constructor( private http: HttpClient, private allService: AllService ) { }
  
  Get(estadoID?: number): Observable<any> {
    let urlDatos = this.url + "?estadoID=";
    if(estadoID == null) {
      urlDatos = urlDatos + null;
    }else{
      urlDatos = this.url + estadoID;
    }
    return this.http.get<Estado>(urlDatos);
  }

  Post(estado: Estado){
    return this.allService.Post(estado, this.url)
    .map(res => res);
  }

  Delete(estadoID: number) {
    return this.allService.Delete(this.url + "?estadoID=" + estadoID)
    .map(res => res);
  }
}
