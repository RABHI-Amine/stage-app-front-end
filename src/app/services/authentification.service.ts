import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  jwt:string;
  username:string;
  roles:string[];

  host = environment.host2;

  constructor(private http:HttpClient,
    
    ) { }

  login(data){
    return this.http.post(`${this.host}/login`,data,{observe:'response'})
  }

  saveToken(jwt:string){
    localStorage.removeItem('token');
    localStorage.setItem('token',jwt);
    this.jwt = jwt;
    this.parseJWT()
  }

  parseJWT(){
    let JWTHelper = new JwtHelperService();
    let decodedJWT = JWTHelper.decodeToken(this.jwt);
    this.username = decodedJWT.sub;
    this.roles = decodedJWT.roles;
    localStorage.setItem("username",this.username)
  }

  isAdmin(){
    return this.roles.indexOf("ADMIN") >= 0;
  }
  isUser(){
    return this.roles.indexOf("ADMIN") >= 0;
  }

  isAuthenticated(){
    return this.roles != undefined;
  }



  initParams(){
    this.jwt = undefined;
    this.roles = undefined;
    this.username = undefined;
  }

  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    this.initParams();
  }
}
