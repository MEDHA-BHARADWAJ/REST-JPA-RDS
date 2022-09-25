import { Component, OnInit } from '@angular/core';
//importing typescript class
import { StudentSurvey } from '../studentSurvey'
//importing service class
import { StudentSurveyService } from '../student-survey.service';
@Component({
  selector: 'app-studentsurvey-list',
  templateUrl: './student-survey-list.component.html',
  styleUrls: ['./student-survey-list.component.css']
})
export class StudentSurveyListComponent implements OnInit {

  studentSurveys: StudentSurvey[] = [];

  stsurv: StudentSurvey[] = [];

  constructor(private studentSurveyService: StudentSurveyService) { }

  ngOnInit(): void {
     this.getStudentSurveys();

    }

    private getStudentSurveys(){
      this.studentSurveyService.getStudentSurveysList().subscribe(data => {
        this.studentSurveys = data;
      });
    }
}
