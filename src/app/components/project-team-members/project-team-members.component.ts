import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Affectation } from 'src/app/models/Affectation.model';
import { ProjetService } from 'src/app/services/projet.service';
import { AddCollaboratorComponent } from '../add-collaborator/add-collaborator.component';

@Component({
  selector: 'app-project-team-members',
  templateUrl: './project-team-members.component.html',
  styleUrls: ['./project-team-members.component.css']
})
export class ProjectTeamMembersComponent implements OnInit {

  @Input() id ;
  @Input() displayAddColaborator = true;
  
  affectations:Affectation[];
  constructor(
    private projetService:ProjetService,
    public dialog: MatDialog

    ) { }

  ngOnInit(): void {
    this.projetService.getProjectAffectations(Number(this.id)).subscribe(affectaions => this.affectations = affectaions)
  }


  
  openDialog() {
    const dialogRef = this.dialog.open(AddCollaboratorComponent,{
      data : {
        id : this.id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
