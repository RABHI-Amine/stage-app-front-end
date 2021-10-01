import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTeamMembersComponent } from './project-team-members.component';

describe('ProjectTeamMembersComponent', () => {
  let component: ProjectTeamMembersComponent;
  let fixture: ComponentFixture<ProjectTeamMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectTeamMembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTeamMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
