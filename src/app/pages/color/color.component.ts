import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { ColorService } from '../../services/color.service';
import { Color } from '../../model/color';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styles: []
})
export class ColorComponent implements OnInit {

  colorForm: FormGroup;
  color: Color;
  colores: Color[] = [];

  constructor( private fb: FormBuilder, private colorService: ColorService) { }

  ngOnInit() {

    this.colorForm = this.fb.group({
      colorID: [null],
      color: [null, Validators.required],
      codigo: [null, Validators.required]
    });

    this.cargarDatos();
  }

  cargarDatos(colorID?: number){
    this.colorService.Get(colorID)
    .subscribe(res=> {
      this.colores = res;
    })
  }

  Guardar(save: Color) {
    debugger;
    let Form: Color = {
      colorID: save.colorID,
      color: save.color,
      codigo: save.codigo
    } 

    this.colorService.Post(Form)
    .subscribe(res=> {
      this.cargarDatos();
    });

  }

}
