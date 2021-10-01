import { Component, Input, OnInit } from '@angular/core';
import { Affectation } from 'src/app/models/Affectation.model';

@Component({
  selector: 'app-employe-project-card',
  templateUrl: './employe-project-card.component.html',
  styleUrls: ['./employe-project-card.component.css']
})
export class EmployeProjectCardComponent implements OnInit {

  @Input() affectation:Affectation;
  constructor() { }

  ngOnInit(): void {
  }

}
