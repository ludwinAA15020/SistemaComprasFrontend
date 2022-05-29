import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvaluacionService {
private myAppurl ='https://localhost:7071/';
private myApiUrl ='api/evaluacion/'

  constructor(private http: HttpClient) { }

  getListEvaluaciones(): Observable<any>{
   return this.http.get(this.myAppurl+ this.myApiUrl);
  }

  saveEvaluacion(evaluacion: any):Observable<any>{
    return this.http.post(this.myAppurl+this.myApiUrl,evaluacion);
  }

}
