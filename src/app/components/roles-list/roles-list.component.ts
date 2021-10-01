import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/models/Role.model';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.css']
})
export class RolesListComponent implements OnInit {

  roles:Role[];
  displayedColumns: string[] = ['code','designation','abreviation','action'];
  constructor(private roleService:RoleService) { }

  ngOnInit(): void {
    this.roleService.getAllRoles().subscribe(roles => this.roles = roles)
  } 

}
