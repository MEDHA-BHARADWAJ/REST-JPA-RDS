import { TestBed } from '@angular/core/testing';

import { StudentSurveyService } from './student-survey.service';

describe('StudentsurveyService', () => {
  let service: StudentSurveyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentSurveyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
