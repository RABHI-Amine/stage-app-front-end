import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tache } from '../models/Tache.model';

@Injectable({
  providedIn: 'root'
})
export class TacheService {
  host = environment.host;


  constructor(private http:HttpClient) { }

  getTacheByProjectAndEmployeId(projectId:number,employeId:number):Observable<Tache[]>{
    return this.http.get<Tache[]>(`${this.host}/employes/${employeId}/projets/${projectId}/taches`);
  }


  createTache(projectId:number,employeId:number,tache:Tache):Observable<Tache>{
    return this.http.post<Tache>(`${this.host}/employes/${employeId}/projets/${projectId}/taches`,tache);
  }
  
  updateTache(id:number,tache:Tache):Observable<Tache>{
    return this.http.put<Tache>(`${this.host}/taches/${id}`,tache);
  }
}
