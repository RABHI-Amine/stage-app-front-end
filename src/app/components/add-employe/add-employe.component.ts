import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-add-employe',
  templateUrl: './add-employe.component.html',
  styleUrls: ['./add-employe.component.css']
})
export class AddEmployeComponent implements OnInit {

  employeForm: FormGroup;

  constructor(
    private employeService:EmployeService,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(){
    this.employeService.createEmploye(this.employeForm.value).subscribe(
      employe => {
        console.log(employe)
        this.employeForm.reset({});
      },
      err => console.log(err)
    )
  }

  initForm(){
    this.employeForm = this.formBuilder.group({
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
        Validators.minLength(4)
      ]),
      numeroTelephone : new FormControl(
        '',
        [
        Validators.required,
        Validators.minLength(4)
      ])
    })
  }

}
