import { Component, OnInit,Input } from '@angular/core';
import { Projet } from 'src/app/models/Projet.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
  
  @Input() projet:Projet;


  constructor() { }

  ngOnInit(): void {
  }

}
