import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RoleService } from 'src/app/services/role.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-delete-role',
  templateUrl: './delete-role.component.html',
  styleUrls: ['./delete-role.component.css']
})
export class DeleteRoleComponent implements OnInit {

  @Input() id;
  constructor(public dialogs: MatDialog,private roleService:RoleService,private router:Router) {}

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
    this.roleService.deleteRole(id)
        .subscribe((response) => {
          window.location.reload()
          
        },
        err => console.log("erreur")
        )
  
    }
}
