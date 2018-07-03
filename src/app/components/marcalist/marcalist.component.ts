import { Component, OnInit } from '@angular/core';

// Servicios
import { MarcaService } from '../../services/marca.service';
import swal from 'sweetalert2';
import { Marca } from '../../model/marca';

@Component({
  selector: 'app-marcalist',
  templateUrl: './marcalist.component.html'
})
export class MarcalistComponent implements OnInit {

  marcaLista: Marca;
  constructor(  private marcaService: MarcaService ) { }

    labels: any = {
      previousLabel: 'Anterior',
      nextLabel: 'Siguiente',
      screenReaderPaginationLabel: 'Paginación',
      screenReaderPageLabel: 'page',
      screenReaderCurrentLabel: `Estás en`
  };

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {
    this.marcaService.GetTodos()
    .subscribe(res => {
      this.marcaLista = res;
    });
  }

  Eliminar(marcaID: number) {    
      this.marcaService.Delete(marcaID)
      .subscribe( res => {
        this.cargarDatos();
      });
  }

  Actualizar( marca: Marca ){
    this.marcaService.marcaSelect = Object.assign({}, marca);

    console.log(marca);
  }

}
