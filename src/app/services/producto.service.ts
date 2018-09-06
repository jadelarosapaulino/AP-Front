import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../model/producto';
import { AllService } from './all.service';

@Injectable()
export class ProductoService {

  url: string = "http://localhost:49465/api/Producto";
  constructor( private http: HttpClient, private allService: AllService) { }

  // Guardar regirstro
  Post(categoria: Producto) {
    return this.allService.Post(categoria, this.url)
      .map(res => res);
  }
}
