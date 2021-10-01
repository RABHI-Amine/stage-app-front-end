import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeProjectDetailsComponent } from './employe-project-details.component';

describe('EmployeProjectDetailsComponent', () => {
  let component: EmployeProjectDetailsComponent;
  let fixture: ComponentFixture<EmployeProjectDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeProjectDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
