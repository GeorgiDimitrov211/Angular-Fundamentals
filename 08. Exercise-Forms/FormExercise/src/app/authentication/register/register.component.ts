import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../models/register.model';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: RegisterModel;
  logginFailed: boolean;
  errorMessage: string;

  constructor(private authService: AuthenticationService, private router: Router) {
    this.model = new RegisterModel('', '', '', '', '');
  }

  ngOnInit() {
  }

  get diagnostics () {
    return JSON.stringify(this.model);
  }

  register() {
    this.authService.register(this.model).subscribe(data => {
      this.router.navigate(['/login']);
    }, 
    err => {
      this.errorMessage = err['error']['description'];
      this.logginFailed = true;
    })
  }
}
