import { Component, OnInit } from '@angular/core';
import { StudentSurvey } from '../studentSurvey';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {StudentSurveyService} from "../student-survey.service";
@Component({
  selector: 'app-create-studentsurvey',
  templateUrl: './create-studentsurvey.component.html',
  styleUrls: ['./create-studentsurvey.component.css']
})
export class CreateStudentsurveyComponent implements OnInit {

  //form: FormGroup | undefined;
  isChecked: boolean | undefined;
  likeval: string = '';
  studentsurvey: StudentSurvey = new StudentSurvey();
  likedList: any = [
    { id:1 , name: 'students' },
    { id:2 , name: 'location' },
    { id:3 , name: 'campus' },
    { id:4 , name: 'atmosphere' },
    { id:5 , name: 'dormrooms' },
    { id:6 , name: 'sports' }
  ];
  likelihoodList: any = [
    { id:1 , name: 'very likely' },
    { id:2 , name: 'likely' },
    { id:3 , name: 'unlikely' }
  ];
  sourceList: any = [
    { id:1 , name: 'friends' },
    { id:2 , name: 'television' },
    { id:3 , name: 'internet' },
    { id:4 , name: 'other' }
  ]

  constructor(private studentSurveyService: StudentSurveyService) { }
  private postResponse: string = '';

  onCheckboxChange(e : any) {
    this.isChecked = !this.isChecked;
    if(e.target.checked){
      let val = this.likedList[e.target.value];
      this.likeval += val.name + ",";
    }else{
      console.log("alert");
    }
  }

  onRadioChange(e : any) {
    if (e.target.selected) {
      let val = this.sourceList[e.target.value];
      this.studentsurvey.sourceOfUni = val.name;
    } else {
      console.log("alert");
    }
  }

  onOptionChange(e : any) {
    if (e.target.checked) {
      let val = this.likelihoodList[e.target.value];
      this.studentsurvey.likelihood = val.name;
    } else {
      console.log("alert");
    }
  }

  ngOnInit(): void {
  }

  onSubmit()
  {
    this.studentsurvey.liking = this.likeval;
    console.log(this.studentsurvey);
    this.postStudentSurvey();
    alert("Form Submitted");
  }

  onCancel(){
    console.log("Cancelled");
  }

  private postStudentSurvey(){
    this.studentSurveyService.postStudentSurvey(this.studentsurvey).subscribe((data: any) => {
      this.postResponse = data;
      console.log(this.postResponse);
    });
  }

}
