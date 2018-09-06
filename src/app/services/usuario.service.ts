import { Injectable } from '@angular/core';
import { AllService } from './all.service';
import { Usuario } from '../model/usuario';

@Injectable()
export class UsuarioService {

  constructor( private allService: AllService) { }

  // Url de la API
  url: string = 'http://localhost:49465/api/Usuario';    



  Get() {

  }

  Post(usuario: Usuario) {
    return this.allService.Post(usuario, this.url)
      .map(res => res);
  }
}
