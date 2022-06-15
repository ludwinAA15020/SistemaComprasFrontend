import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private myAppurl = environment.urlService
private myApiUrl ='/api/usuario/'

  constructor(private http: HttpClient) { }
  saveUsuario(usuario: any):Observable<any>{
    return this.http.post(this.myAppurl+this.myApiUrl,usuario);
  }
  getcategorias(){
    return this.http.get<any[]>(`${this.myAppurl}/api/Roles`);
  }
  getproveedor(){
    return this.http.get<any[]>(`${this.myAppurl}/api/Proveedor`);
  }
}
