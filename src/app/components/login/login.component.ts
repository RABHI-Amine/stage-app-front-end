import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  isLoginFailed:boolean;
  isLoggedIn:boolean;
  errorMessage:string;

  constructor(
    private authentificationService:AuthentificationService,
    private formBuilder:FormBuilder,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(){
    this.authentificationService.login(this.loginForm.value)
    .subscribe(
     resp => {
       let jwt = resp.headers.get('Authorization');
      this.authentificationService.saveToken(jwt);
      
      this.isLoggedIn = true;
      this.isLoginFailed=false;
      this.authenticateUser(this.authentificationService.roles);
     }
    ),
    err => {
      this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        this.isLoggedIn = false;
    }
  }

  initForm(){
    this.loginForm = this.formBuilder.group({
      username : new FormControl(
        '',
        [
        Validators.required,
      ]),
      password : new FormControl(
        '',
        [
        Validators.required,
      ]),
    })
  }


  authenticateUser(userRoles: string[]) {
    if (userRoles.includes('ADMIN')) 
      this.router.navigate(['/admin']);
    else{
      this.router.navigate(['/employe']);
    }
    }
}
