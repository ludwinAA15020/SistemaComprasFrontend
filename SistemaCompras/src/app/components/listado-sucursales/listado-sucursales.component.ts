import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { SucursalService } from 'src/app/services/sucursal.service';

@Component({
  selector: 'app-listado-sucursales',
  templateUrl: './listado-sucursales.component.html',
  styleUrls: ['./listado-sucursales.component.css']
})
export class ListadoSucursalesComponent implements OnInit {
  sucursales:any[]=[]
  id:number|undefined

  constructor( 
    private toastr: ToastrService,
    private router:Router,
    private _sucursalService:SucursalService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.obtenerSucursales();
    let id = Number(this.route.snapshot.paramMap.get('id'))
    this.id=id
    console.log("El perfil seleccionado es:",this.id)
  }
  obtenerSucursales(){
    this._sucursalService.getListSucursal().subscribe(data => {
      console.log(data);
      this.sucursales = data;
      console.log(this.sucursales);
    }, error => {
      console.log(error);
    })
  }

}
