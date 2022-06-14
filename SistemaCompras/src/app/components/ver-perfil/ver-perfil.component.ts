import { Component, Input, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { EmpresaService } from 'src/app/services/empresa.service';
import { PerfilService } from 'src/app/services/perfil.service';
import { Empresa } from 'src/app/interfaces/empresa';



@Component({
  selector: 'app-ver-perfil',
  templateUrl: './ver-perfil.component.html',
  styleUrls: ['./ver-perfil.component.css']
})
export class VerPerfilComponent implements OnInit {
  perfiles:any[]=[]
  idProveedor:number|undefined
  idPerfil:number|undefined
  data:any;
  filter=10
  
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private _empresa:EmpresaService,
    private _perfilService:PerfilService,
  ){ }

  ngOnInit(): void {
    this.idProveedor = Number(this.route.snapshot.paramMap.get('id'));
    this.idPerfil = Number(this.route.snapshot.paramMap.get('id2'));
    console.log(this.idPerfil)
    if(this.idPerfil!=0){
      this.obtenerPerfil(Number(this.idPerfil));
    }
    
  }
  obtenerPerfiles(){
    this._perfilService.getListPerfiles().subscribe(data => {
      console.log(data);
      this.perfiles = data;
      console.log(this.perfiles);
    }, error => {
      console.log(error);
    })
  }
  obtenerPerfil(id:number){
    this._perfilService.perfilGetById(id).subscribe(data=>{
      this.perfiles.push(data);
    })
  }
  referencias(index: number) {
    this.router.navigate(['/app-listado-referencias',index]);
  }
  sucursales(index:number){
    this.router.navigate(['/app-listado-sucursales',index]);
  }

}
