import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Affectation } from '../models/Affectation.model';
import { Employe } from '../models/Employe.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  host = environment.host;

  constructor(private http:HttpClient) { }

  getAllEmployes():Observable<Employe[]>{
    return this.http.get<Employe[]>(`${this.host}/employes`);
  }

  getEmployesById(id:number):Observable<Employe>{
    return this.http.get<Employe>(`${this.host}/employes/${id}`);
  }

  deleteEmploye(id:number):Observable<Employe>{
    console.log(id);
    console.log(typeof(id))
    return this.http.delete<Employe>(`${this.host}/employes/${id}`);
  }

  createEmploye(Employe:Employe):Observable<Employe>{
    return this.http.post<Employe>(`${this.host}/employes`,Employe)
  }

  getEmployeAffectations(id:number):Observable<Affectation[]>{
    return this.http.get<Affectation[]>(`${this.host}/employes/${id}/affectations`);
  } 

  updateEmploye(id:number,employe:Employe):Observable<Employe>{
    return this.http.put<Employe>(`${this.host}/employes/${id}`,employe);
  }

  getEmployeByEmail(email:string):Observable<Employe>{
    return this.http.get<Employe>(`${this.host}/employes/email/${email}`);
  }
}
