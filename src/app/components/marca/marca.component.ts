import { Component, NgModule, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NgForm, FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import swal from 'sweetalert2';

// Servicios
import { MarcaService } from '../../services/marca.service';
import { Marca } from '../../model/marca';
import { ModeloService } from '../../services/modelo.services';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styles: []
})

export class MarcaComponent implements OnInit {

  marcaID: any;
  marcaForm: FormGroup;

   marca: Marca = {
     marcaID: 0,
     marca_nombre: "",
     img: "",
     cantidad: 0
   };

  constructor( 
        private http: HttpClient, 
        private marcaService: MarcaService,
        private activateRoute: ActivatedRoute,
        private modeloService: ModeloService,
        private fb: FormBuilder
      ) {        

      }

  ngOnInit() {
    this.cargarData();

    this.marcaForm = this.fb.group({
      marcaID: [null],
      marca_nombre: [Validators.compose([Validators.required, Validators.nullValidator])],
      img: [null],
      catidad: [null]
    });
  }

  cargarData(){
    this.activateRoute.params
        .subscribe(parametro => {
          this.marcaID = parametro['marcaID'];
          if(this.marcaID > 0 || this.marcaID != "nuevo") {
            this.marcaService.Get(this.marcaID)
            .subscribe(res => this.marca = res); 
          }
    });
  }
  selectedFile: File [] = [];

  onFileSelected(event) {
    this.selectedFile = event.target.files;
  }

  // Guardar y actualizar datos
  onUpload(form: NgForm) {
        if(this.marca.marcaID == 0) {
          this.marcaService.Post(form.value, this.selectedFile)
          .subscribe( data => {
            swal(
                'success',
                'Registro guardado correctamente!',
                'success'
              );
          });
        }  else {
          this.marcaService.Post(form.value, this.selectedFile)
          .subscribe( data => {
            swal(
                'success',
                'Registro actualizado correctamente!',
                'success'
              );
          });
        }     
  }

}
