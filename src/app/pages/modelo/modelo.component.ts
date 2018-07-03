import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpEventType } from '@angular/common/http';
import { TransferState, makeStateKey } from '@angular/platform-browser';

// Modelos
import { Modelo } from '../../model/modelo';
import { Marca } from '../../model/marca';

// Servicios
import { ModeloService } from '../../services/modelo.services';
import { MarcaService } from '../../services/marca.service';

import swal from 'sweetalert2';

@Component({
  selector: 'app-modelo',
  templateUrl: './modelo.component.html',
  styles: []
})

export class ModeloComponent implements OnInit {

  modeloForm: FormGroup;
  save: any;

  modelo: Modelo = {
    modeloID: 0,
    modelo_nombre: "",
    marcaID: 0,
    marca_nombre: null
  };

  modeloID: number = null;
  marcaID: number = null;
  modelos: Modelo [] = [];
  marcaLista: Marca;

  constructor(private modeloService: ModeloService, 
              private actRoute: ActivatedRoute,
              private marcaService: MarcaService,
              private fb: FormBuilder,
              private state: TransferState) { }

              labels: any = {
                previousLabel: 'Anterior',
                nextLabel: 'Siguiente',
                screenReaderPaginationLabel: 'Paginación',
                screenReaderPageLabel: 'page',
                screenReaderCurrentLabel: `Estás en`
            };

  ngOnInit() {
    // Formulario
    this.modeloForm = this.fb.group({
      modeloID: [null],
      modelo_nombre: ['', Validators.required],
      marcaID: [0, Validators.required]
    });

    this.cargarModelos();
    this.cargarMarcas();

    if (this.marcaID != null ) {
      this.modeloForm.patchValue({marcaID: this.marcaID});
      //this.modeloForm.get('marcaID').disable();
    }    
  }

  // Lista de modelos con o sin parametros
  cargarModelos() {
    this.actRoute.params
    .subscribe( parametro => {
        this.marcaID = parametro['marcaID'];
        this.modeloService.GetAll(this.modeloID,this.marcaID)
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
            this.modelos = event.body;
          }        
        });
    });
  }

  // Cargar lista de marcas
  cargarMarcas() {
    this.marcaService.GetTodos()
    .subscribe(res => {
      this.marcaLista = res;
    });
  }

  // Registrar nuevo modelo
  Guardar() {
    let Save: Modelo = {
      modeloID: null,
      modelo_nombre: this.modeloForm.value.modelo_nombre,
      marcaID: this.modeloForm.value.marcaID,
      marca_nombre: ""
    };
    
    this.modeloService.Post(Save)
      .subscribe(res => {
        this.cargarModelos();
      });
  }
  
  // SetModelo() {
  //   this.modeloService.Post(form.value)
  //     .subscribe(res => res);
  // }

}
