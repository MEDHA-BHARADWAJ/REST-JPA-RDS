import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSurveyListComponent } from './student-survey-list.component';

describe('StudentsurveyListComponent', () => {
  let component: StudentSurveyListComponent;
  let fixture: ComponentFixture<StudentSurveyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentSurveyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSurveyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
