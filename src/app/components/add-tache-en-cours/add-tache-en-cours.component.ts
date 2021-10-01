import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeService } from 'src/app/services/employe.service';
import { ProjetService } from 'src/app/services/projet.service';
import { TacheService } from 'src/app/services/tache.service';

@Component({
  selector: 'app-add-tache-en-cours',
  templateUrl: './add-tache-en-cours.component.html',
  styleUrls: ['./add-tache-en-cours.component.css']
})
export class AddTacheEnCoursComponent implements OnInit {

  tacheForm: FormGroup;
  projetId:number = 1
  employeId:number = 1

  constructor(
    private employeService:EmployeService,
    private projetService:ProjetService,
    private tacheService:TacheService,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(){
    let tache = this.tacheForm.value
    this.tacheService.createTache(this.projetId,this.employeId,tache)
      .subscribe(
        tache => {
          console.log(tache)
          window.location.reload();

        },
        err => console.log(err)
      )
  }

  initForm(){
    this.tacheForm = this.formBuilder.group({
      name : new FormControl(
        '',
        [
        Validators.required,
        Validators.minLength(4)
      ]),
      etat : new FormControl('En cours')
    })
  }

}
