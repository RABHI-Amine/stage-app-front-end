import { Component, OnInit } from '@angular/core';
import { ProjetService } from 'src/app/services/projet.service';
import { Projet} from '../../models/Projet.model';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit {

  projets: Projet[];

  constructor(private projectService:ProjetService) { }

  ngOnInit(): void {
    this.projectService.getAllProjects().subscribe(data => {
      this.projets = data;
      console.log("project page ");
    },(err) =>{
      console.log("erreur")
    })
  }

}
