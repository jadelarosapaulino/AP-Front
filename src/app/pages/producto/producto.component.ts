import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MarcaService } from '../../services/marca.service';
import { Marca } from '../../model/marca';
import { ActivatedRoute } from '@angular/router';
import { ModeloService } from '../../services/modelo.services';
import swal from 'sweetalert2';
import { Modelo } from '../../model/modelo';
import { CategoriaComponent } from '../categoria/categoria.component';
import { CategoriaService } from '../../services/categoria.service';
import { Categoria } from '../../model/categoria';
import { EstadoService } from '../../services/estado.service';
import { Estado } from '../../model/estado';
import { Producto } from '../../model/producto';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: []
})
export class ProductoComponent implements OnInit {

  productoForm: FormGroup;
  marcaLista: Marca;
  marcaID: number = null;
  modeloID: number = null;
  categoriaID: number = null;
  modeloLista: Modelo [] = [];
  categoriaList: Categoria  [] = [];
  estadoList: Estado  [] = [];

  constructor( private fb: FormBuilder,
              private marcaService: MarcaService,
              private modeloService: ModeloService,
              private categoriaService: CategoriaService,
              private estadoService: EstadoService,
              private productoService: ProductoService
            ) { }

  ngOnInit() {
    this.productoForm = this.fb.group({
      productoID: [null],
      serie: ['', Validators.required],
      precio_compra: [0, Validators.required],
      precio_venta: [0, Validators.required],
      marcaID: [0, Validators.required],
      modeloID: [0, Validators.required],
      categoriaID: [0, Validators.required],
      estadoID: [0, Validators.required],
      activo: ''
    });

    this.cargarMarcas();
    this.cargarCategorias();
    this.cargarEstados();

  }

  // Cargar listado de marcas
  cargarMarcas() {
    this.marcaService.GetTodos()
    .subscribe(res => {
      this.marcaLista = res;
    });
  }

  //Carga listado de modelos relacionados a la marca seleccionada
  cargarModelos() {   
    this.marcaID = this.productoForm.value['marcaID'];
       this.modeloService.GetModelos(this.marcaID)
      .subscribe(res => {   
    
      if (res.length > 0) {
        this.modeloLista = res;
      } else {
        swal({
            //title: 'Esta marca no tiene modelos registrados',
            text: 'Desea registrar un modelo?',
            type: 'question'
          });
      }
    });
  }

  //Selecciona la categoria relacionada a este modelo
  modeloCategoria() {
    this.modeloID = this.productoForm.value['modeloID'];

    this.modeloService.GetModelo(this.modeloID)
    .subscribe(data => {

      debugger;

      this.categoriaID = data.categoriaID;

      if (this.categoriaID != null) {
        this.cargarCategorias(this.categoriaID);
      } else {
        swal({
            //title: 'Esta marca no tiene modelos registrados',
            text: 'Este modelo no relacionado a una categoria, por favor seleccione una categoria',
            type: 'warning'
          });
      }
      
    });
  }

  //Cargar lista de categorias
  cargarCategorias(categoriaID?: number) {
    debugger;

    this.categoriaID = categoriaID;

    if (this.categoriaID != null) {
      debugger;
        this.productoForm.patchValue({categoriaID: this.categoriaID});
    } else {
      this.categoriaService.Get(null)
        .subscribe(res => {
        this.categoriaList = res;
      });
    }
  }

  //Cargar lista de estados
  cargarEstados() {
    this.estadoService.Get(null)
    .subscribe(res => {
      this.estadoList = res;
    });
  }

  Guardar(save: Producto) {
    debugger;
    let Form: Producto = {
      serie: save.serie,
      precio_compra: save.precio_compra,
      precio_venta: save.precio_venta,
      marcaID: save.marcaID,
      modeloID: save.modeloID,
      categoriaID: save.categoriaID,
      estadoID:save.estadoID,
      activo: 'N'
    }

    this.productoService.Post(Form)
      .subscribe(res => {
        console.log(res);
        this.productoForm = res;
      });
  }

}
