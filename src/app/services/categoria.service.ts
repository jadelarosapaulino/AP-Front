import { Injectable } from '@angular/core';
import { Categoria } from '../model/categoria';
import { HttpClient } from '@angular/common/http';
import { AllService } from './all.service';
import { Observable } from '../../../node_modules/rxjs/Observable';

@Injectable()
export class CategoriaService {

  constructor( private http: HttpClient, private allService: AllService) { }

  url: string = "http://localhost:49465/api/Categoria";

  // Obtener datos
  Get(categoriaID?: number): Observable<any> {
    let urlDatos = this.url + "?categoriaID=";
    if(categoriaID == null) {
      urlDatos = urlDatos + null;
    }else{
      urlDatos = this.url + categoriaID;
    }
    return this.http.get<Categoria>(urlDatos)
    .map(res => res);
  }

  // Guardar regirstro
  Post(categoria: Categoria) {
    return this.allService.Post(categoria, this.url)
      .map(res => res);
  }

}
