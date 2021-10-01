import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeProjectsListComponent } from './employe-projects-list.component';

describe('EmployeProjectsListComponent', () => {
  let component: EmployeProjectsListComponent;
  let fixture: ComponentFixture<EmployeProjectsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeProjectsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeProjectsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
