import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Employe } from 'src/app/models/Employe.model';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-employe-edit-form',
  templateUrl: './employe-edit-form.component.html',
  styleUrls: ['./employe-edit-form.component.css']
})

export class EmployeEditFormComponent implements OnInit {

  editEmployeForm: FormGroup;
  @Input() id:number;
  employe:Employe;
  updated = false;

  constructor(
    private employeService:EmployeService,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.employeService.getEmployesById(this.id).subscribe(
      employe => {
        this.employe = employe;   
        console.log(employe)
        this.editEmployeForm.setValue({
          nom : this.employe.nom,
          prenom : this.employe.prenom,
          email : this.employe.email,
          numeroTelephone : this.employe.numeroTelephone
        })
      },
      err => console.log(err)
    )
    this.initForm();
  }

  onSubmit(){
  this.employeService.updateEmploye(this.employe.id,this.editEmployeForm.value)
    .subscribe(
      employe => {
        this.updated = true;

        setTimeout(() => {
          this.updated = false;
        }, 2000);
        
      },
      err => console.log(err)
      )
  }

  initForm(){
    console.log("init form")
    this.editEmployeForm = this.formBuilder.group({
      nom : new FormControl(
        '',
        [
        Validators.required,
        Validators.minLength(4)
      ]),
      prenom : new FormControl(
        '',
        [
        Validators.required,
        Validators.minLength(4)
      ]),
      email : new FormControl(
        '',
        [
          Validators.required,
      ]),
      numeroTelephone : new FormControl(
        '',
        [
      ])  
    })
  }
}

