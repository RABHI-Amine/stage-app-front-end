import { Component, OnInit } from '@angular/core';
import { Employe } from 'src/app/models/Employe.model';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-employes-list',
  templateUrl: './employes-list.component.html',
  styleUrls: ['./employes-list.component.css']
})
export class EmployesListComponent implements OnInit {

  panelOpenState = false;

  employes:Employe[];
  displayedColumns: string[] = ['id','nom','prenom','action'];
  constructor(private employeService:EmployeService) { }

  ngOnInit(): void {
    this.employeService.getAllEmployes().subscribe(
      employes => this.employes = employes,
      err => console.log(err)
      )
  }

}
