import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProjetService } from 'src/app/services/projet.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-delete-project',
  templateUrl: './delete-project.component.html',
  styleUrls: ['./delete-project.component.css']
})
export class DeleteProjectComponent implements OnInit {

  @Input() id;
  constructor(public dialog: MatDialog,private projetService:ProjetService,private router:Router) {}

  openDialog() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.delete(this.id);
      }
    });
  }

  ngOnInit(): void {
  }

  delete(id:number){
    this.projetService.deleteProject(id)
        .subscribe((response) => {
          console.log(response)
          this.router.navigate(['/admin/projects'])
        },
        err => console.log("erreur")
        )
  
    }
}
