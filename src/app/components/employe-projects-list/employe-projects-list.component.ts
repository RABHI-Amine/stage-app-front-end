import { Component, OnInit } from '@angular/core';
import { Affectation } from 'src/app/models/Affectation.model';
import { Employe } from 'src/app/models/Employe.model';
import { Projet } from 'src/app/models/Projet.model';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-employe-projects-list',
  templateUrl: './employe-projects-list.component.html',
  styleUrls: ['./employe-projects-list.component.css']
})
export class EmployeProjectsListComponent implements OnInit {
  affectations:Affectation[];
  employe:Employe;
  constructor(
    private employeService:EmployeService,
    private authentificationService:AuthentificationService
    ) { }

  ngOnInit(): void {


    this.employeService.getEmployeByEmail(localStorage.getItem("username")).subscribe(
      employe => {
        this.employeService.getEmployeAffectations(employe.id).subscribe(
          affectations => {
            this.affectations = affectations
          },
          err => console.log(err)
        )
      },
      erreur => console.log(erreur)

    )
   
  }

}
