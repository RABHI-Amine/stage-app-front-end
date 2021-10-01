import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Employe } from 'src/app/models/Employe.model';
import { Role } from 'src/app/models/Role.model';
import { AffectationService } from 'src/app/services/affectation.service';
import { EmployeService } from 'src/app/services/employe.service';
import { ProjetService } from 'src/app/services/projet.service';
import { RoleService } from 'src/app/services/role.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Affectation } from 'src/app/models/Affectation.model';

@Component({
  selector: 'app-add-collaborator',
  templateUrl: './add-collaborator.component.html',
  styleUrls: ['./add-collaborator.component.css']
})
export class AddCollaboratorComponent implements OnInit {

  @Input() projetId:number;
  affectationForm: FormGroup;
  employes:Employe[] = [];
  team:Employe[] = [];
  roles:Role[] = [];
  affectations:Affectation[]= [];

  constructor(
    private formBuilder:FormBuilder,
    private employeService:EmployeService,
    private roleService:RoleService,
    private affectationService:AffectationService,
    private projetService:ProjetService,
    @Inject(MAT_DIALOG_DATA) public data: {id: number}
  ) { }

  ngOnInit(): void {
    let idProjet = Number(this.data.id);

    this.initForm();
    this.employeService.getAllEmployes().subscribe(employes => this.employes = employes)
    this.projetService.getProjectAffectations(idProjet).subscribe(affectations => {
      this.affectations = affectations
      this.team = this.affectations.map(aff => aff.employe)
      this.employes = this.employes.filter(i => !this.team.find(f => f.id === i.id));
    })
    this.roleService.getAllRoles().subscribe(roles => this.roles = roles)
  }

  onSubmit(){
    let idEmploye = this.affectationForm.value.employe;
    let idProjet = Number(this.data.id);



    this.affectationService.affectaterCollaborateur(idProjet,idEmploye,{role : { id : this.affectationForm.value.role}}).subscribe(affectation => {
      console.log(affectation)
      window.location.reload();
    })
  }

  initForm(){
    this.affectationForm = this.formBuilder.group({
      employe : [null],
      role : [null]
    })
  }

}
