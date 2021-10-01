import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeProjectCardComponent } from './employe-project-card.component';

describe('EmployeProjectCardComponent', () => {
  let component: EmployeProjectCardComponent;
  let fixture: ComponentFixture<EmployeProjectCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeProjectCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeProjectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
