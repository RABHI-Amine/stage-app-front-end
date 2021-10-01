import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Affectation } from '../models/Affectation.model';

@Injectable({
  providedIn: 'root'
})
export class AffectationService {
  host = environment.host;

  constructor(private http:HttpClient) { }

  affectaterCollaborateur(idProjet:number,idEmploye:number,body:any):Observable<Affectation>{
    return this.http.post<Affectation>(`${this.host}/projets/${idProjet}/employes/${idEmploye}/affectations`,body);
  }

  
}
