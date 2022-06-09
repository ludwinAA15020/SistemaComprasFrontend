import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpresaService } from 'src/app/services/empresa.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-crear-empresa',
  templateUrl: './crear-empresa.component.html',
  styleUrls: ['./crear-empresa.component.css']
})

export class CrearEmpresaComponent implements OnInit {
  id: string = "";
  msj:string ="Agregar";
  organizaciones: any[] = [
    { id: 1, nombre: 'Corporativa' },
    { id: 2, nombre: 'Sociedad' },
    { id: 3, nombre: 'Persona natural' }
  ];
  form: FormGroup;


  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private _empresaService: EmpresaService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer

  ) {
    this.form = this.fb.group({
      idproveedores:[],
      idperfil: ['0'],
      nombreproveedor: [''],
      representante: [''],
      direccionCompania: [''],
      telefonoCompania: [''],
      faxCompania: [''],
      movilCompania: [''],
      email: [''],
      contactosLista:[''],
      website: [''],
      tipoOrganizacion: [''],
      nit: [''],
      nrc: [''],
      rubro: [''],
      calificacion:[''],

    }) 
    this.id = this.route.snapshot.params['id'];
    if (this.id!="new"){
      this.msj="Editar"
      this._empresaService.empresaGetById(Number(this.id)).subscribe(data => {
        console.log("Data para mostrar en el formulario",data);
        this.form.setValue(data);
      }, error => {
        console.log(error);
      })
    }
  }

  ngOnInit(): void {
   
  }
  agregarEmpresa() {
    if (this.id == "new") {
      const empresa: any = {
        nit: this.form.get('nit')?.value,
        nombreproveedor: this.form.get('nombreproveedor')?.value,
        representante: this.form.get('representante')?.value,
        direccionCompania: this.form.get('direccionCompania')?.value,
        email: this.form.get('email')?.value,
        telefonoCompania: this.form.get('telefonoCompania')?.value,
        faxCompania: this.form.get('faxCompania')?.value,
        movilCompania: this.form.get('movilCompania')?.value,
        website: this.form.get('website')?.value,
        nrc: this.form.get('nrc')?.value,
        rubro: this.form.get('rubro')?.value,
        tipoOrganizacion: this.form.get('tipoOrganizacion')?.value,
      }
      this._empresaService.saveEmpresa(empresa).subscribe(data => {
        this.toastr.success('La empresa fue registrado con exito', 'Empresa registrado');
        //this.obtenerEmpresas();
        this.form.reset();
        this.router.navigate(['/app-listado-empresas']);
      }, error => {
        this.toastr.error('Upsss.... ocurrio un error', 'Error');
        console.log(error);
      })
    }
  }

}
 /*onChange(event: any) {
   this.opcionSeleccionada = event.target.value
 }*/

/*
  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }*/