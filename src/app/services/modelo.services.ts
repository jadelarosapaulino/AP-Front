import { Injectable } from '@angular/core';
import { Modelo } from '../model/modelo';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { AllService } from './all.service';

@Injectable()
export class ModeloService {

    modeloLista: Modelo [] = [];
    // Url de la API
      url: string = 'http://localhost:49465/api/Modelo';      

    constructor( private http: HttpClient, private allService: AllService) { }

    // Listado de modelos
    GetAll(modeloID?: number, marcaID?: number): Observable<any>{
    const urlDatos = `${ this.url + '/GetAll?modeloID=' + modeloID + '&marcaID=' + marcaID }`;
    return this.http.get<Modelo>(urlDatos, {observe: 'events', reportProgress: true});
  }

  // Guardar registro
  Post( modelo: Modelo ): Observable<Modelo> {
    return this.allService.Post(modelo, this.url)
      .map(data => data);
  }
}