import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentSurvey } from './studentSurvey';
@Injectable({
  providedIn: 'root'
})
export class StudentSurveyService {

  private baseURLGet = "http://localhost:8080/api/v1/getSurveys";
  private baseURLPost = "http://localhost:8080/api/v1/saveSurvey";

  constructor(private httpClient: HttpClient) {

  }
  ngOnInit():void{

  }
  getStudentSurveysList(): Observable<StudentSurvey[]>{
    let headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('X-Api-Cattle-Auth', 'true');
    //Vary	Origin, Access-Control-Request-Method, Access-Control-Request-Headers
   return this.httpClient.get<StudentSurvey[]>(`${this.baseURLGet}`) ;
  }

  private header : HttpHeaders | undefined ;

  postStudentSurvey(studentsurvey: StudentSurvey): Observable<object>{
    //this.header?.append('Content-Type', 'text/plain')
    //this.header?.append('Accept', 'text/plain')
    return this.httpClient.post<StudentSurvey>(`${this.baseURLPost}`,studentsurvey) ;
  }

}
