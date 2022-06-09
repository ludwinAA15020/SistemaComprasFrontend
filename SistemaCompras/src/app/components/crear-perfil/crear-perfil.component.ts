import { Component, OnInit, Input } from '@angular/core';
import { Perfil } from 'src/app/interfaces/perfil'
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PerfilService } from 'src/app/services/perfil.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-crear-perfil',
  templateUrl: './crear-perfil.component.html',
  styleUrls: ['./crear-perfil.component.css']
})
export class CrearPerfilComponent implements OnInit {
  form: FormGroup;
  id:number|undefined
  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private _perfilService: PerfilService,
    private route:ActivatedRoute
  ) {
    this.form = this.fb.group({
      idproveedores:[],
      nombreceo: [''],
      nombregerente: [''],
      directorareaLista: [''],
      escritura: [''],
      razonsocial: ['']
    })
  }
  ngOnInit(): void {
    let id= Number(this.route.snapshot.paramMap.get('id'))
    this.id=id
    console.log('Empresa seleccionada es:',this.id)
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
    //perfil.idproveedores=this.id
    this._perfilService.savePerfil(perfil).subscribe(data => {
      this.toastr.success('El perfil fue registrado con exito', 'Perfil registrado');
      this.form.reset();
    },
     error => {
      this.toastr.error('Upsss.... ocurrio un error', 'Error');
      console.log(error);
      console.log(perfil)
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

