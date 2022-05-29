import { Component, OnInit,Input} from '@angular/core';
import { Empresa } from './../../interfaces/empresa';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-empresas',
  templateUrl: './listado-empresas.component.html',
  styleUrls: ['./listado-empresas.component.css']
})
export class ListadoEmpresasComponent implements OnInit {
@Input() empresas: any[]=[]
  constructor(
    private toastr: ToastrService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }
  verEmpresa(index: number) {
    this.router.navigate(['/app-ver-perfil', index]);

  }

  eliminarEmpresa(index: number) {
    this.empresas.splice(index, 1)
    this.toastr.error('La empresa fue eliminada con éxito', 'Empresa eliminada')
  }
  setEmpresa(empresa:any){
    console.log(empresa)
  }

}
