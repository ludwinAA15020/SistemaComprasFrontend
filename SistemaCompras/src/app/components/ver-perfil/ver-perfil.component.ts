import { Component, Input, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { EmpresaService } from 'src/app/services/empresa.service';
import { PerfilService } from 'src/app/services/perfil.service';


@Component({
  selector: 'app-ver-perfil',
  templateUrl: './ver-perfil.component.html',
  styleUrls: ['./ver-perfil.component.css']
})
export class VerPerfilComponent implements OnInit {
  perfiles:any[]=[]
  id:number|undefined
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private _empresa:EmpresaService,
    private _perfilService:PerfilService
  ){ }

  ngOnInit(): void {
    this.obtenerPerfil();
    let id = Number(this.route.snapshot.paramMap.get('id'))
    this.id= id
    console.log("Empresa envia a ver perfil:",this.id)

  }
  obtenerPerfil(){
    this._perfilService.getListPerfiles().subscribe(data => {
      console.log(data);
      this.perfiles = data;
      console.log(this.perfiles);
    }, error => {
      console.log(error);
    })

  }
  referencias(index: number) {
    this.router.navigate(['/app-listado-referencias',index]);
  }
  sucursales(index:number){
    this.router.navigate(['/app-listado-sucursales',index]);
  }

}
