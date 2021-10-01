import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EmployeService } from 'src/app/services/employe.service';
import { ProjetService } from 'src/app/services/projet.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-delete-employe',
  templateUrl: './delete-employe.component.html',
  styleUrls: ['./delete-employe.component.css']
})
export class DeleteEmployeComponent implements OnInit {

  @Input() id;
  constructor(public dialogs: MatDialog,private employeService:EmployeService,private router:Router) {}

  openDialog() {
    const dialogRef = this.dialogs.open(ConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.delete(this.id);
      }
    });
  }

  ngOnInit(): void {
  }

  delete(id:number){
    this.employeService.deleteEmploye(id)
        .subscribe((response) => {
          console.log(response)
          window.location.reload()
        },
        err => console.log("erreur")
        )
  
    }
}
