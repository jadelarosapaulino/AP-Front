import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-r-forms',
  templateUrl: './r-forms.component.html',
  styles: []
})
export class RFormsComponent implements OnInit {

  rForm: FormGroup;
  post: any;
  description: string = '';
  name: string = '';
  titleAlert: string = '';

  constructor( private fb: FormBuilder ) {

   }

   addPost(post) {
     this.description = post.description;
     this.name = post.name;
   }

   ngOnInit() {
    this.rForm = this.fb.group({
      name: [null, Validators.required],
      description: [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(500)])],
      validate: ''
    });

    this.rForm.get('validate').valueChanges.subscribe(
      (validate) => {
        debugger;
          if (validate === '1') {
              this.rForm.get('name').setValidators([Validators.required, Validators.minLength(3)]);
              this.titleAlert = 'You need to specify at least 3 characters';
          } else {
              this.rForm.get('name').setValidators(Validators.required);
          }
          this.rForm.get('name').updateValueAndValidity();

      });
  }

}
