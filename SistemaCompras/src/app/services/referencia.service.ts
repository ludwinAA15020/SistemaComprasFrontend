import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ReferenciaService {
    private myAppurl = 'https://localhost:7071/';
    private myApiUrl = 'api/referencia/'

    constructor(private http: HttpClient) { }

    saveReferencia(referencia: any): Observable<any> {
        return this.http.post(this.myAppurl + this.myApiUrl, referencia);
    }
}
