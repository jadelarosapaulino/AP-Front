import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  constructor( private usuarioService: UsuarioService, private router: Router) { }

  sonIguales(campo1: string, campo2: string) {
    return (group: FormGroup) => {
      let pass1 = group.controls[campo1].value;
      let pass2 = group.controls[campo2].value;

      if (pass1 === pass2) {
        return null;
      }

      return {
        sonIguales: true
      }

    }
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      usuarioID: new FormControl(null),
      nombre: new FormControl(null, Validators.required),
      correo: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      role: new FormControl('User', Validators.required),
      img: new FormControl(null),

      condiciones: new FormControl(false)
    }, { validators: this.sonIguales('password', 'password2')});
  }


  registrarUsuario() {

    /*if (!this.registerForm.invalid) {
     return;
    }*/

    if (!this.registerForm.value.condiciones) {
    swal('Importante', 'Debe aceptar las condiciones', 'warning')
    return;
    }

    this.usuarioService.Post(this.registerForm.value)
    .subscribe(res => {
      swal('OK','Se ha registrado exitosamente','success');

      this.router.navigate(['/login']);
    });
    
    console.log(this.registerForm.value);
  }

}
