import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroupDirective,FormGroup, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material';
import { LoginService } from './login.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  FormLogin : FormGroup;
  matcher = new MyErrorStateMatcher();
  loginIncorrecto:boolean = false;
  constructor(private fb: FormBuilder,private userService: LoginService) {
      this.createForm();
  }

  ngOnInit() {
    this.onChanges();
  }

  createForm() {
    this.FormLogin = this.fb.group({
      usuarioFormControl : new FormControl('',[
        Validators.required
      ]),
      claveFormControl : new FormControl('', [
        Validators.required
      ])
    });
  }

  onChanges(): void {
    this.FormLogin.valueChanges.subscribe(()=>{
      this.loginIncorrecto = false;
    })
  }

  entrar(){
    this.loginIncorrecto = true;
    //console.log(this.FormLogin.get('claveFormControl').value);
  }

  OnSubmit(form: NgForm) {
    this.userService.registerUser(form.value)
      .subscribe((data: any) => {
        if (data.Succeeded == true) {
          /*this.resetForm(form);
          this.toastr.success('User registration successful');
          */
        }
        else{

        }
          //this.toastr.error(data.Errors[0]);
      });
  }

}
