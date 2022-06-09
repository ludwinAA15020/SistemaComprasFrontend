import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ReferenciaService {
    private myAppurl = 'https://localhost:44327/';
    private myApiUrl = 'api/Referencias/'

    constructor(private http: HttpClient) { }

    saveReferencia(referencia: any): Observable<any> {
        return this.http.post(this.myAppurl + this.myApiUrl, referencia);
    }
    getListReferencias(): Observable<any> {
        return this.http.get(this.myAppurl + this.myApiUrl);
    }
    deleteReferencia(id: number): Observable<any> {
        return this.http.delete(this.myAppurl + this.myApiUrl + id);
    }
    referenciaGetById(id: number) {
        return this.http.get(this.myAppurl + this.myApiUrl + id);
      }

}
