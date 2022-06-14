import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PerfilService } from 'src/app/services/perfil.service';
import { EmpresaService } from 'src/app/services/empresa.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Empresa } from 'src/app/interfaces/empresa';
import { ThisReceiver } from '@angular/compiler';


@Component({
  selector: 'app-crear-perfil',
  templateUrl: './crear-perfil.component.html',
  styleUrls: ['./crear-perfil.component.css']
})
export class CrearPerfilComponent implements OnInit {
  form: FormGroup
  id:number|undefined;
  data:any;
  empresa:any[]=[]

  
  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private _perfilService: PerfilService,
    private _empresaService:EmpresaService,
    private route:ActivatedRoute,
  ) {
    this.form = this.fb.group({
      idperfil:[],
      idproveedores:[],
      nombreceo: [''],
      nombregerente: [''],
      directorareaLista: [''],
      escritura: [''],
      razonsocial: ['']
    })
  }
  ngOnInit(): void {
    this.id= Number(this.route.snapshot.paramMap.get('id'));
    this._empresaService.empresaGetById(this.id).subscribe(data=>{
      this.empresa.push(data);
      console.log(this.empresa);
  });
}
  agregarPerfil() {
    const perfil: any = {
      idproveedores:this.id,
      nombreceo: this.form.get('nombreceo')?.value,
      directorareaLista: this.form.get('directorareaLista')?.value,
      nombregerente: this.form.get('nombregerente')?.value,
      escritura: this.form.get('escritura')?.value,
      razonsocial: this.form.get('razonsocial')?.value,
    }
    this._perfilService.savePerfil(perfil).subscribe(data => {
      this.toastr.success('El perfil fue registrado con exito', 'Perfil registrado');
      console.log(perfil)
      for (let index = 0; index < this.empresa.length; index++) {
        const element = this.empresa[index];
        console.log(element)
        
      }
      this.form.reset();
    },
     error => {
      this.toastr.error('Upsss.... ocurrio un error', 'Error');
      console.log(error);
      console.log(perfil)
    })
  }

  obtenerEmpresa(id:number){
    this._empresaService.empresaGetById(id).subscribe(data=>{
      this.data = data;
    })
  }

}


  /*radioChangeHandler(event: any) {
    this.selectedCargo = event.target.value
  }
  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  public closePopup() {
    this.displayStyle = "none";
  }
*/

