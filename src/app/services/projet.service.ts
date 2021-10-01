import { Injectable } from '@angular/core';
import {Projet} from '../models/Projet.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Affectation } from '../models/Affectation.model';
@Injectable({
  providedIn: 'root'
})

export class ProjetService {
   
  host = environment.host;

  constructor(private http:HttpClient) { }

  getAllProjects():Observable<Projet[]>{
    return this.http.get<Projet[]>(`${this.host}/projets`);
  }

  getProjectsById(id:number):Observable<Projet>{
    return this.http.get<Projet>(`${this.host}/projets/${id}`);
  }

  deleteProject(id:number):Observable<Projet>{
    console.log(id);
    console.log(typeof(id))
    return this.http.delete<Projet>(`${this.host}/projets/${id}`);
  }

  createProject(projet:Projet):Observable<Projet>{
    return this.http.post<Projet>(`${this.host}/projets`,projet)
  }

  getProjectAffectations(id:number):Observable<Affectation[]>{
    return this.http.get<Affectation[]>(`${this.host}/projets/${id}/affectations`)
  }
  // updateProject(id:number):Observable<Projet>{
  //   const host = environment.host;
  //   return this.http.put<Projet>(`${host}/projets/${id}`);
  // }

  
}
