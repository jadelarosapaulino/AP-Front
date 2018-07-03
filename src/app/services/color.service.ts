import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Color } from '../model/color';
import { AllService } from './all.service';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ColorService {
url: string = "http://localhost:49465/api/Color";
  constructor(
              private http: HttpClient,
              private allService: AllService
            ) { }


  Get(colorID?: number): Observable<any>  {
    let urlDatos = this.url + "?colorID=";
      if(colorID == null) {
        urlDatos = urlDatos + null;
      }else{
        urlDatos = this.url + colorID;
      }
    return this.http.get<Color>(urlDatos)
    .map(res => res);
    }

    Post(color: Color): Observable<Color> {
      debugger;
      return this.allService.Post(color, this.url)
      .map(res=> res);
    }


}
