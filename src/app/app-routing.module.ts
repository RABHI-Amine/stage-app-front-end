import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { AdminComponent } from './components/admin/admin.component';
import { EmployeComponent } from './components/employe/employe.component';
import { EmployesListComponent } from './components/employes-list/employes-list.component';
import { RolesListComponent } from './components/roles-list/roles-list.component';
import { AddEmployeComponent } from './components/add-employe/add-employe.component';
import { AddRoleComponent } from './components/add-role/add-role.component';
import { EmployeProjectsListComponent } from './components/employe-projects-list/employe-projects-list.component';
import { EmployeProjectDetailsComponent } from './components/employe-project-details/employe-project-details.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path : '', component : LoginComponent},
  { path : 'admin' , component : AdminComponent ,
    children : [
      { path: '', component: NavbarComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path : 'projects' ,component : ProjectsPageComponent },
      { path : 'projects/add',component : CreateProjectComponent}, 
      { path : 'projects/:id',component : ProjectDetailsComponent},
      { path : 'employes' , component : EmployesListComponent},
      { path : 'profiles' , component : RolesListComponent},
      { path : 'employes/add', component : AddEmployeComponent},
      { path : 'profiles/add' , component : AddRoleComponent}
    ]
  },
  { path : 'employe' , component : EmployeComponent ,
    children : [
        { path: '', component: NavbarComponent },
        { path: 'dashboard', component: DashboardComponent },
        { path : 'projects' ,component : EmployeProjectsListComponent },
        { path : 'projects/:id',component : EmployeProjectDetailsComponent}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
