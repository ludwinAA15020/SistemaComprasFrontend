import { Component, OnInit,Input} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-listado-empresas',
  templateUrl: './listado-empresas.component.html',
  styleUrls: ['./listado-empresas.component.css']
})
export class ListadoEmpresasComponent implements OnInit {
@Input() empresas:any
  constructor(
    private toastr: ToastrService,
    private router: Router,
    private _perfil:PerfilService
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

}
