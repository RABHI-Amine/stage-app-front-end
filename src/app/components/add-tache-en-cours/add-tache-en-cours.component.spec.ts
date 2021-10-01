import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTacheEnCoursComponent } from './add-tache-en-cours.component';

describe('AddTacheEnCoursComponent', () => {
  let component: AddTacheEnCoursComponent;
  let fixture: ComponentFixture<AddTacheEnCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTacheEnCoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTacheEnCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
