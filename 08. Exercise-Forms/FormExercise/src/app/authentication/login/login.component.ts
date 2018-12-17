import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../models/login.model';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errMessage: string;
  logginFailed: boolean;
  model: LoginModel;
  
  constructor(private authService: AuthenticationService, private router: Router) { 
    this.model = new LoginModel('', '');
  }

  ngOnInit() {

  }

  login() {
    this.authService.login(this.model).subscribe(
      data => {
        this.successfulLogin(data);
      },
      error => {
        this.logginFailed = true;
        this.errMessage = error.error.description; 
      })
  }

  successfulLogin(data) {
    this.authService.authtoken = data['_kmd']['authtoken'];
    localStorage.setItem('authtoken', data['_kmd']['authtoken']);
    localStorage.setItem('username', data['username']);
    this.router.navigate(['']);
  }
}
