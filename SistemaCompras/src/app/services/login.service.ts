import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IUser } from '../models/IUser';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private myAppurl = environment.urlService
  private myApiUrl ='/api/usuario/login/'

  constructor(private http: HttpClient) { }

  loginUser(email:string, pass:string){
    return this.http.get<IUser>(this.myAppurl+this.myApiUrl+email+pass);
  }
}
