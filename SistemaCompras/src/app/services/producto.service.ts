import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
private myAppurl ='https://localhost:7071/';
private myApiUrl ='api/producto/'

  constructor(private http: HttpClient) { }

  getListProductos(): Observable<any>{
   return this.http.get(this.myAppurl+ this.myApiUrl);
  }

}
