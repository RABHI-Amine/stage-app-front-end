import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Affectation } from 'src/app/models/Affectation.model';
import { Projet } from 'src/app/models/Projet.model';
import { Tache } from 'src/app/models/Tache.model';
import { ProjetService } from 'src/app/services/projet.service';
import { TacheService } from 'src/app/services/tache.service';

@Component({
  selector: 'app-employe-project-details',
  templateUrl: './employe-project-details.component.html',
  styleUrls: ['./employe-project-details.component.css']
})
export class EmployeProjectDetailsComponent implements OnInit {

  id:string;
  projet:Projet;
  NbreDeJoursLivraison:number;
  affectations : Affectation[] = [];

  /***********************************/

  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private projetService:ProjetService,
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.projetService.getProjectsById(Number(this.id)).subscribe(projet => {
      this.projet = projet
      let date = new Date(this.projet.dateLivraison).valueOf() -new Date().valueOf()
      this.NbreDeJoursLivraison = Math.floor((((date / 1000) /60) /60)/24)+1;
    })

    this.projetService.getProjectAffectations(Number(this.id)).subscribe(affectaions => this.affectations = affectaions)
    
  }

  
}
