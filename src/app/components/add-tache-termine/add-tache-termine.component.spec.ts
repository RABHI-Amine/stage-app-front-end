import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTacheTermineComponent } from './add-tache-termine.component';

describe('AddTacheTermineComponent', () => {
  let component: AddTacheTermineComponent;
  let fixture: ComponentFixture<AddTacheTermineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTacheTermineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTacheTermineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
