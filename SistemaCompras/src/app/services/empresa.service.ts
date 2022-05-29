import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  private myAppurl = 'https://localhost:7071/';
  private myApiUrl = 'api/empresa/'

  constructor(private http: HttpClient) { }

  getListEmpresas(): Observable<any> {
    return this.http.get(this.myAppurl + this.myApiUrl);
  }

  saveEmpresa(empresa: any): Observable<any> {
    return this.http.post(this.myAppurl + this.myApiUrl, empresa);
  }
}
