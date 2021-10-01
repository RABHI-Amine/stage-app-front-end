import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Projet } from 'src/app/models/Projet.model';
import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {


  id: string;
  projet: Projet;
  NbreDeJoursLivraison: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private projetService: ProjetService,
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.projetService.getProjectsById(Number(this.id)).subscribe(projet => {
      this.projet = projet
      let date = new Date(this.projet.dateLivraison).valueOf() - new Date().valueOf()
      this.NbreDeJoursLivraison = Math.floor((((date / 1000) / 60) / 60) / 24) + 1;
      console.log(this.NbreDeJoursLivraison)
    })
  }
}
