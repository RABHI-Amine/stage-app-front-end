import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  ProjectTasksBoardComponent
} from './project-tasks-board.component';

describe('ProjectTasksBoardComponent', () => {
  let component: ProjectTasksBoardComponent;
  let fixture: ComponentFixture < ProjectTasksBoardComponent > ;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        declarations: [ProjectTasksBoardComponent]
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTasksBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
