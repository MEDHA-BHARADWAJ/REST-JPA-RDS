import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentsurveyComponent } from './create-studentsurvey/create-studentsurvey.component';
import { StudentSurveyListComponent } from './studentsurvey-list/student-survey-list.component';

const routes: Routes = [
  { path :'studentsurveys', component: StudentSurveyListComponent},
  { path :'create-studentsurvey', component: CreateStudentsurveyComponent},
  { path : ' ', redirectTo: 'studentsurveys', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
