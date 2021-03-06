import { Component, OnInit,Input} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { PerfilService } from 'src/app/services/perfil.service';
import { EmpresaService } from 'src/app/services/empresa.service';
import { Empresa } from './../../interfaces/empresa';

@Component({
  selector: 'app-listado-empresas',
  templateUrl: './listado-empresas.component.html',
  styleUrls: ['./listado-empresas.component.css']
})
export class ListadoEmpresasComponent implements OnInit {
empresas:any[]=[]
public page: number = 0;
public search: string = '';
filterEmpresa="";

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private _perfil:PerfilService,
    private _empresa:EmpresaService,
    private route:ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.obtenerEmpresas();
  }

  obtenerEmpresas() {
    this._empresa.getListEmpresas().subscribe(data => {
      console.log(data);
      this.empresas = data;
      console.log(this.empresas);
    }, error => {
      console.log(error);
    })

  }
  editarEmpresa(empresa:any){
    this.router.navigate([`app-empresas//${empresa.idproveedores}`]);
  }
  verPerfil(index: number,index2:number) {
       this.router.navigate(['/app-ver-perfil',index,index2]);
  }
  eliminarEmpresa(id: number) {
    this._empresa.deleteEmpresa(id).subscribe(data => {
      this.toastr.error('La empresa fue eliminada con exito', 'Empresa eliminada')
  }, error => {
      console.log(error);

    })
  }
  nextPage() {
    this.page += 5;
  }
  prevPage() {
    if (this.page > 0)
      this.page -= 5;
  }
  onSearchEmpresa(search: string) {
    this.page = 0;
    this.search = search;
  }
}
