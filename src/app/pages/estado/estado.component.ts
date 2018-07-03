import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EstadoService } from '../../services/estado.service';
import { HttpEventType } from '@angular/common/http';
import swal from 'sweetalert2';
import { Estado } from '../../model/estado';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {

  estadoForm: FormGroup;

  estadoID: number = null;
  estado: Estado [] = [];

  constructor( private fb: FormBuilder, 
               private activateRoute: ActivatedRoute,
               private estadoService: EstadoService) { }

  ngOnInit() {
    this.estadoForm = this.fb.group({
      estadoID: [null],
      estado: [null, Validators.required]
    });

    this.estadoForm.get('estadoID').disable();

    this.cargarEstados();
  }

  // Cargar lista de resgitros
  cargarEstados() {
    this.activateRoute.params
    .subscribe( parametro => {
      this.estadoID = parametro['estadoID'];

      this.estadoService.Get(this.estadoID)
        .subscribe(event => {
          if ( event.type === HttpEventType.ResponseHeader ) {
            if (event.status != 200) {
              swal(
                "Error",
                "Error al cargar los datos verifique e intente nuevamente!",
                "error"
              )
            }
          } else if (event.type === HttpEventType.Response) {
            this.estado = event.body;
          }
        });
    });
  }

  // Guardar Registro
  Guardar(save: any) {
    let Form: Estado = {
      estadoID: save.estadoID,
      estado: save.estado
    }

    this.estadoService.Post(Form)
      .subscribe(res => {
        this.cargarEstados();
      });
  }

  // Eliminar Registro
  Eliminar(estadoID: number) {        
        swal({
          title: 'Desea eliminar este registro?',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Eliminar'
        }).then((result) => {
          if (result.value) {
            this.estadoService.Delete(estadoID)
            .subscribe(event => {
               // Cargar lista de datos actulizada
                this.cargarEstados(); 
          }, error => {
            swal(
              'Error',
                  error._body,
                  'error'
                )
            });
          }
        });           
  }
}
