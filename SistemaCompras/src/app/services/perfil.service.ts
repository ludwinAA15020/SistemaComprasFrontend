import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PerfilService {
    private myAppurl = 'https://localhost:7071/';
    private myApiUrl = 'api/perfil/'

    constructor(private http: HttpClient) { }

    getListPerfiles(): Observable<any>{
        return this.http.get(this.myAppurl+ this.myApiUrl);
       }
    savePerfil(perfil: any): Observable<any> {
        return this.http.post(this.myAppurl + this.myApiUrl, perfil);
    }
}
