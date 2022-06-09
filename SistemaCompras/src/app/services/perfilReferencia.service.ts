import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PerfilReferenciaService {
    private myAppurl = 'https://localhost:44327/';
    private myApiUrl = 'api/PerfilReferencias/';

    constructor(private http: HttpClient) {
    }

    savePerfilReferencia(perfilReferencia: any): Observable<any> {
        return this.http.post(this.myAppurl + this.myApiUrl, perfilReferencia);
    }

}
