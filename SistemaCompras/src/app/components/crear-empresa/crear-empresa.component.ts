import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-crear-empresa',
  templateUrl: './crear-empresa.component.html',
  styleUrls: ['./crear-empresa.component.css']
})

export class CrearEmpresaComponent implements OnInit {
  selectedTipo: string = '';
  organizaciones: any[] = [
    { id: 1, nombre: 'Corporativa' },
    { id: 2, nombre: 'Sociedad' },
    { id: 3, nombre: 'Persona natural' }
  ];
  @Input() lista: any[] = [
    {/*
      nit: '1234-567891-234-5',
      nombreProveedor: 'Empresa',
      representante: 'Juan peréz',
      direccionCompania: 'direccionCompania1',
      email: 'example@hotmail.com',
      telefonoCompania: '12345678',
      faxCompania: '12345678',
      movilCompania: '12345678',
      website: 'www.example.com',
      nrc: '1234-567891-234-5',
      rubro: 'Papeleria',
      tipoOrganizacion: 'Persona natural'*/
    }];
  form: FormGroup;


  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private _empresaService: EmpresaService
  ) {
    this.form = this.fb.group({
      nit: ['', [Validators.required, Validators.maxLength(17)]],
      nombreProveedor: ['', [Validators.required, Validators.maxLength(25)]],
      representante: ['', [Validators.required, Validators.maxLength(25)]],
      direccionCompania: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.maxLength(25)]],
      telefonoCompania: ['', [Validators.required, Validators.maxLength(9)]],
      faxCompania: ['', [Validators.required, Validators.maxLength(9)]],
      movilCompania: ['', [Validators.required, Validators.maxLength(9)]],
      website: ['', [Validators.required, Validators.maxLength(25)]],
      nrc: ['', [Validators.required, Validators.maxLength(17)]],
      rubro: ['', [Validators.required, Validators.maxLength(25)]],
      tipoOrganizacion: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.obtenerEmpresas();
  }
  obtenerEmpresas() {
    this._empresaService.getListEmpresas().subscribe(data => {
      console.log(data);
      this.lista = data;
      console.log(this.lista);
    }, error => {
      console.log(error);
    })

  }
  agregarEmpresa() {
    const empresa: any = {
      nit: this.form.get('nit')?.value,
      nombreProveedor: this.form.get('nombreProveedor')?.value,
      representante: this.form.get('representante')?.value,
      direccionCompania: this.form.get('direccionCompania')?.value,
      email: this.form.get('email')?.value,
      telefonoCompania: this.form.get('telefonoCompania')?.value,
      faxCompania: this.form.get('faxCompania')?.value,
      movilCompania: this.form.get('movilCompania')?.value,
      website: this.form.get('website')?.value,
      nrc: this.form.get('nrc')?.value,
      rubro: this.form.get('rubro')?.value,
      tipoOrganizacion: this.form.get('tipoOrganizacion')?.value
    }
    this._empresaService.saveEmpresa(empresa).subscribe(data => {
      this.toastr.success('La empresa fue registrado con exito', 'Empresa registrado');
      this.obtenerEmpresas();
      this.form.reset();
    }, error => {
      this.toastr.error('Upsss.... ocurrio un error', 'Error');
      console.log(error);
    })
    this.lista.push(empresa);
    this.toastr.success('La empresa fue registrada con exito!', 'Empresa Registrada');
    this.form.reset();
    this.router.navigate(['/app-crear-empresa']);
  }
  eliminarEmpresa(index: number) {
    this.lista.splice(index, 1)
    this.toastr.error('La empresa fue eliminada con éxito', 'Empresa eliminada')
  }
  onChange(event: any) {
    this.selectedTipo = event.target.value
  }
  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
}