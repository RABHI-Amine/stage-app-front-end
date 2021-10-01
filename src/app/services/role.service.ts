import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Role } from '../models/Role.model';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  host = environment.host;

  constructor(private http:HttpClient) { }

  getAllRoles():Observable<Role[]>{
    return this.http.get<Role[]>(`${this.host}/roles`);
  }

  createRole(role:Role):Observable<Role>{
    return this.http.post<Role>(`${this.host}/roles`,role);
  }

  deleteRole(id:number):Observable<Role>{
    return this.http.delete<Role>(`${this.host}/roles/${id}`);
  }
}
