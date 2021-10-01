import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeEditFormComponent } from './employe-edit-form.component';

describe('EmployeEditFormComponent', () => {
  let component: EmployeEditFormComponent;
  let fixture: ComponentFixture<EmployeEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
