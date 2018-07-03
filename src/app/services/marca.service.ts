import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Marca } from '../model/marca';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class MarcaService {

  // Url de la API
  url: string = 'http://localhost:49465/api/Marca';

  marcaSelect: Marca;
  marcaLista: Marca[] = [];
  header = new Headers();

  constructor( private http: Http) { }

  marcaID: any;

  // Guardar Marca
  Post(marca: Marca, file: File []) {
    const fd = new FormData;
    this.marcaID = marca.marcaID;

    //debugger;
    for (const item of file) {
      fd.append('img', item);
    }
    fd.append('marca', marca.marca_nombre);
    fd.append('marcaID', marca.marcaID.toString())    

      return  this.http.post(this.url, fd)
      .map( res => res.json());
  }

  // Listado de marcas
  GetAll() {
    this.http.get(this.url)
    .map((data: Response) => {
      return data.json() as Marca[];
    }).toPromise().then(x => {
      this.marcaLista = x;
    });
  }

  GetTodos() {
    return this.http.get(this.url)
    .map((res: Response) => res.json());
  }

  // Obtener una marca
  Get(marcaID: number) {
    const urlDatos = `${ this.url + '?marcaID=' + marcaID }`;
    return this.http.get(urlDatos)
    .map(data => data.json());
  }

  // Eliminar una marca
  Delete(marcaID: number) {
  let params = new HttpParams().set('marcaID', marcaID.toString())

    //let headers = new Headers().set('Content-type', 'application/x-www-form-urlencoded; charset=utf-8')
    var headerOptions = new Headers({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'});
    return this.http.delete(this.url + '/Delete?' + params, {headers: headerOptions});
  }
}
