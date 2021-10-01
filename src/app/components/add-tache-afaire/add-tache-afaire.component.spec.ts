import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTacheAFaireComponent } from './add-tache-afaire.component';

describe('AddTacheAFaireComponent', () => {
  let component: AddTacheAFaireComponent;
  let fixture: ComponentFixture<AddTacheAFaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTacheAFaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTacheAFaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
