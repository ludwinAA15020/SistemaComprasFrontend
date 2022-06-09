import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SucursalService {
    private myAppurl = 'https://localhost:44327/';
    private myApiUrl = 'api/Sucursal/';

    constructor(private http: HttpClient) {
    }

    getListSucursal(): Observable<any> {
        return this.http.get(this.myAppurl + this.myApiUrl);
    }
    saveSucursal(sucursal: any): Observable<any> {
        return this.http.post(this.myAppurl + this.myApiUrl, sucursal);
      }

}
