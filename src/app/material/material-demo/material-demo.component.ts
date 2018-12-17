import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroupDirective,FormGroup, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-material-demo',
  templateUrl: './material-demo.component.html',
  styleUrls: ['./material-demo.component.css']
})
export class MaterialDemoComponent{
  evalform : FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(private fb: FormBuilder){
    this.createForm();
  }

  createForm() {
    this.evalform = this.fb.group({
      nombreFormControl : new FormControl('',[
        Validators.required
      ]),
      emailFormControl : new FormControl('', [
        Validators.required,
        Validators.email,
      ])
    });
  }

}
