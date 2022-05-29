import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-sucursal',
  templateUrl: './agregar-sucursal.component.html',
  styleUrls: ['./agregar-sucursal.component.css']
})
export class AgregarSucursalComponent implements OnInit {

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

  sucursales: any[] = [
    {
      nombreSucursal: 'Sucursal 1',
      direccion: 'Direccion',
      municipioId: 1,
      departamentoId: 2
    }
  ]
  form: FormGroup;

  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,) {
    this.form = this.fb.group({
      nombreSucursal: ['', [Validators.required, Validators.maxLength(17)]],
      direccion: ['', [Validators.required, Validators.maxLength(25)]],
      municipioId: ['', Validators.required],
      departamentoId: ['', Validators.required],

    })
  }

  ngOnInit(): void {
  }
  agregarSucursal() {
    const sucursal: any = {
      nombreSucursal: this.form.get('nombreSucursal')?.value,
      direccion: this.form.get('direccion')?.value,
      municipioId: this.form.get('municipioId')?.value,
      departamentoId: this.form.get('departamentoId')?.value
      //this.toastr.success('La empresa fue registrada con éxito!', 'Empresa Registrada')
    }
    this.sucursales.push(sucursal);
    this.toastr.success('La sucursal fue registrada con exito!', 'Sucursal Registrada');
    this.form.reset();
    this.router.navigate(['/app-agregar-sucursal']);
  }

  onChangeCity(event: any) {
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
