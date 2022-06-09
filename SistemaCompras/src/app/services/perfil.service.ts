import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PerfilService {
    private myAppurl = 'https://localhost:44327/';
    private myApiUrl = 'api/Perfil/'

    constructor(private http: HttpClient) { }

    getListPerfiles(): Observable<any> {
        return this.http.get(this.myAppurl + this.myApiUrl);
    }
    savePerfil(perfil: any): Observable<any> {
        return this.http.post(this.myAppurl + this.myApiUrl, perfil);
    }
    perfilGetById(id:number){
        return this.http.get(this.myAppurl+this.myApiUrl+id);
      }
}
