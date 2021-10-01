import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  projetForm: FormGroup;
  @ViewChild('formDirective') private formDirective: NgForm;

  constructor(
    private projetService:ProjetService,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(){
    this.projetService.createProject(this.projetForm.value)
      .subscribe( projet => {
        console.log(projet);
        this.formDirective.resetForm()
      },
        (err) => console.log(err)
      )
  }

  initForm(){
    this.projetForm = this.formBuilder.group({
      nom : new FormControl(
        '',
        [
        Validators.required,
        Validators.minLength(4)
      ]),
      description : new FormControl(''),
      dateDebut : new FormControl(
        '',
        [
        Validators.required
      ]),
      dateLivraison : new FormControl(
        '',
        [
        Validators.required
      ]),
      nomClient : new FormControl(
        '',
        [
        Validators.required,
        Validators.minLength(4)
      ])
    })
  }
}
