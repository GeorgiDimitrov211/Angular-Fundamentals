import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { RegisterModel } from '../authentication/models/register.model';
import { LoginModel } from '../authentication/models/login.model';


// Constansts for fetching data
const appKey = 'kid_rycJXANgN'; 
const appSecret = '0b9cc5f7165a43bcb06f20969da02079';
const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
const loginUrl = `https://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`;

@Injectable()

export class AuthenticationService {

  private currentAuthtoken: string; 
  constructor(private http : HttpClient) {
    
  }

  private createAuthHeaders(type: string) : HttpHeaders {
    if (type === 'Basic') {
      return new HttpHeaders({
        'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
        'Content-Type': 'application/json'
      })
    } else {
      return new HttpHeaders({
        'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
        'Content-Type': 'application/json'
      })
    }
  }

  login(loginModel : LoginModel) {
    return this.http.post(loginUrl, JSON.stringify(loginModel),
    {
      headers: this.createAuthHeaders('Basic')
    })
  }

  register(registerModel : RegisterModel) {
    return this.http.post(registerUrl, JSON.stringify(registerModel),
    {
      headers: this.createAuthHeaders('Basic')
    })
  }
  logout() {
    return this.http.post(logoutUrl, {},
      {
        headers: this.createAuthHeaders('Kinvey')
      })
  }
  
  checkIfLoggedIn() {
    return this.currentAuthtoken === localStorage.getItem('authtoken')
  }

  get authtoken() {
    return this.currentAuthtoken;
  }

  set authtoken(value: string) {
    this.currentAuthtoken = value; 
  }
}
