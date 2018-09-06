import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Categoria } from '../../model/categoria';
import { CategoriaService } from '../../services/categoria.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styles: []
})
export class CategoriaComponent implements OnInit {

  categoriaForm: FormGroup;
  categoriaID: number;

  categorias: Categoria [] = [];

  constructor( private fb: FormBuilder, 
              private categoriaService: CategoriaService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.categoriaForm = this.fb.group({
      categoriaID: [null],
      categoria_nombre: [null, Validators.required]
    });

    this.cagarCategorias();
  }

  // Carga el listado de categorias
  cagarCategorias() {
    this.activatedRoute.params
    .subscribe(parametro => {
      this.categoriaID = parametro['categoriaID'];

      if (this.categoriaID > 0) {
        this.categoriaService.Get(this.categoriaID)
        .subscribe(res => {
          this.categorias = res;
        });
      } else {
        this.categoriaService.Get(null)
        .subscribe(res => {
          this.categorias = res;
        })
      }
    })
  }


  // Guardar Registro
  Guardar(save: any) {
    let Form: Categoria = {
      categoriaID: save.categoriaID,
      categoria_nombre: save.categoria_nombre
    }

    this.categoriaService.Post(Form)
      .subscribe(res => {
        this.cagarCategorias();
      });
  }

}
