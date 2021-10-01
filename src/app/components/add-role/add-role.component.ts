import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {

  roleForm: FormGroup;

  constructor(
    private roleService:RoleService,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(){
    this.roleService.createRole(this.roleForm.value).subscribe(
      role => console.log(role),
      err => console.log(err)
    )
  }

  initForm(){
    this.roleForm = this.formBuilder.group({
      designation : new FormControl(
        '',
        [
        Validators.required,
        Validators.minLength(4)
      ]),
      abreviation : new FormControl(
        '',
        [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(5)

      ]),
      code : new FormControl(
        '',
        [
        Validators.required,
        Validators.minLength(4)
      ]),
    
    })
  }

}
