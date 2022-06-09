import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequisicionService {
//private myAppurl ='https://localhost:44327/';
private myAppurl = environment.urlService
private myApiUrl ='/api/requisicion/'

  constructor(private http: HttpClient) { }

  getListRequisicion(): Observable<any>{
   return this.http.get(this.myAppurl+ this.myApiUrl);
  }

  deleteProducto(id:number): Observable<any>{
    return this.http.delete(this.myAppurl+this.myApiUrl+id);
  }

  saveProducto(producto: any):Observable<any>{
    return this.http.post(this.myAppurl+this.myApiUrl,producto);
  }

  editarProducto(id:number, producto:any): Observable<any>{
    return this.http.put(this.myAppurl+this.myApiUrl+id,producto);
  }
  productoGetById(id:number){
    return this.http.get(this.myAppurl+this.myApiUrl+id);
  }

  getcategorias(){
    return this.http.get<any[]>(`${this.myAppurl}/api/Categorias`);
  }

}
