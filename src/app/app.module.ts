import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { JwtModule } from "@auth0/angular-jwt";

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import {LayoutModule} from '@angular/cdk/layout';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { DeleteProjectComponent } from './components/delete-project/delete-project.component';
import { AddCollaboratorComponent } from './components/add-collaborator/add-collaborator.component';
import { AdminComponent } from './components/admin/admin.component';
import { EmployeComponent } from './components/employe/employe.component';
import { EmployesListComponent } from './components/employes-list/employes-list.component';
import { RolesListComponent } from './components/roles-list/roles-list.component';
import { AddRoleComponent } from './components/add-role/add-role.component';
import { AddEmployeComponent } from './components/add-employe/add-employe.component';
import { DeleteEmployeComponent } from './components/delete-employe/delete-employe.component';
import { DeleteRoleComponent } from './components/delete-role/delete-role.component';
import { EmployeProjectsListComponent } from './components/employe-projects-list/employe-projects-list.component';
import { EmployeProjectCardComponent } from './components/employe-project-card/employe-project-card.component';
import { EmployeProjectDetailsComponent } from './components/employe-project-details/employe-project-details.component';
import { EmployeDashboardComponent } from './components/employe-dashboard/employe-dashboard.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { ProjectTasksBoardComponent } from './components/project-tasks-board/project-tasks-board.component';
import { AddTacheAFaireComponent } from './components/add-tache-afaire/add-tache-afaire.component';
import { AddTacheTermineComponent } from './components/add-tache-termine/add-tache-termine.component';
import { AddTacheEnCoursComponent } from './components/add-tache-en-cours/add-tache-en-cours.component';
import { ProjectTeamMembersComponent } from './components/project-team-members/project-team-members.component';
import { EmployeEditFormComponent } from './components/employe-edit-form/employe-edit-form.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    ProjectsPageComponent,
    ProjectCardComponent,
    CreateProjectComponent,
    ProjectDetailsComponent,
    ConfirmationDialogComponent,
    DeleteProjectComponent,
    AddCollaboratorComponent,
    AdminComponent,
    EmployeComponent,
    EmployesListComponent,
    RolesListComponent,
    AddRoleComponent,
    AddEmployeComponent,
    DeleteEmployeComponent,
    DeleteRoleComponent,
    EmployeProjectsListComponent,
    EmployeProjectCardComponent,
    EmployeProjectDetailsComponent,
    EmployeDashboardComponent,
    ProjectTasksBoardComponent,
    AddTacheAFaireComponent,
    AddTacheTermineComponent,
    AddTacheEnCoursComponent,
    ProjectTeamMembersComponent,
    EmployeEditFormComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    JwtModule,  
    //material-modules
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    MatDividerModule,
    MatNativeDateModule,
    MatTableModule,
    MatSelectModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatDialogModule,
    LayoutModule,
    AppRoutingModule,
    MatCardModule,
    MatTooltipModule,
    HttpClientModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    DragDropModule
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
