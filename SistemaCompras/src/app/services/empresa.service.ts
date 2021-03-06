import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  private myAppurl = 'https://localhost:44327/';
  private myApiUrl = 'api/Proveedor/';

  constructor(private http: HttpClient) {
   }

  getListEmpresas(): Observable<any> {
    return this.http.get(this.myAppurl + this.myApiUrl);
  }

  saveEmpresa(empresa: any): Observable<any> {
    return this.http.post(this.myAppurl + this.myApiUrl, empresa);
  }
  
  deleteEmpresa(id: number): Observable<any> {
    return this.http.delete(this.myAppurl + this.myApiUrl + id);
  }

  editarEmpresa(id: number, empresa: any): Observable<any> {

    return this.http.put(this.myAppurl + this.myApiUrl + id,empresa);
  }
  empresaGetById(id: number) {
    return this.http.get(this.myAppurl + this.myApiUrl + id);
  }
}
