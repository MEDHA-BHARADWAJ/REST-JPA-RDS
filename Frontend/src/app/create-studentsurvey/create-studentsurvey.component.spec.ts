import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStudentsurveyComponent } from './create-studentsurvey.component';

describe('CreateStudentsurveyComponent', () => {
  let component: CreateStudentsurveyComponent;
  let fixture: ComponentFixture<CreateStudentsurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStudentsurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStudentsurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
