import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SucursalService } from 'src/app/services/sucursal.service';

@Component({
  selector: 'app-agregar-sucursal',
  templateUrl: './agregar-sucursal.component.html',
  styleUrls: ['./agregar-sucursal.component.css']
})
export class AgregarSucursalComponent implements OnInit {

  sucursales: any[] = []
  id:number|undefined
  form: FormGroup;

  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private _sucursalService:SucursalService,
    private route:ActivatedRoute) {
    this.form = this.fb.group({
      idperfil:[],
      ubicacionSucursal: [''],
      imagenSucursal: [''],

    })
  }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.id=id;
    console.log("Perfil:",this.id)
  }
  agregarSucursal() {
    const sucursal: any = {
      idperfil:this.id,
      ubicacionSucursal: this.form.get('ubicacionSucursal')?.value,
      imagenSucursal: this.form.get('imagenSucursal')?.value,
    }
    this._sucursalService.saveSucursal(sucursal).subscribe(data => {
      this.toastr.success('La sucursal fue registrado con exito', 'Sucursal registrado');
      this.form.reset();
    }, error => {
      this.toastr.error('Upsss.... ocurrio un error', 'Error');
      console.log(error);
    })
}

/*  onChangeCity(event: any) {
    this.selectedMunicipio = event.target.value
  }
   onChangeDepartament(event: any) {
    this.selectedDepartamento = event.target.value
  }

  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
}
 selectedMunicipio: number = 0;
  selectedDepartamento: number = 0;

  municipios: any[] = [
    { id: 1, nombre: 'San Marcos' },
    { id: 2, nombre: 'San Salvador' },
    { id: 3, nombre: 'Santo Tomás' }
  ];
  departamentos: any[] = [
    { id: 1, nombre: 'San Miguel' },
    { id: 2, nombre: 'San Salvador' },
    { id: 3, nombre: 'Santa Ana' }
  ];
*/
}