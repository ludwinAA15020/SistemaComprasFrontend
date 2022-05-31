import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router,ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpresaService } from 'src/app/services/empresa.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-crear-empresa',
  templateUrl: './crear-empresa.component.html',
  styleUrls: ['./crear-empresa.component.css']
})

export class CrearEmpresaComponent implements OnInit {
  parametro: string = "";
  mensaje: string = "";
  opcionSeleccionada:number=0;
  organizaciones: any[] = [
    { id: 1, nombre: 'Corporativa' },
    { id: 2, nombre: 'Sociedad' },
    { id: 3, nombre: 'Persona natural' }
  ];
  @Input() lista: any[] = [];
  form: FormGroup;


  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private _empresaService: EmpresaService,
    private activateRoute: ActivatedRoute,
    private sanitizer: DomSanitizer

  ) {
    this.form = this.fb.group({
      idperfil:['' ,Validators.required],
      nit: ['', [Validators.required, Validators.maxLength(20)]],
      nombreproveedor: ['', [Validators.required, Validators.maxLength(100)]],
      representante: ['', [Validators.required, Validators.maxLength(100)]],
      direccionCompania: ['', [Validators.required, Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.maxLength(50)]],
      telefonoCompania: ['', [Validators.required, Validators.maxLength(15)]],
      faxCompania: ['', [Validators.required, Validators.maxLength(15)]],
      movilCompania: ['', [Validators.required, Validators.maxLength(15)]],
      website: ['', [Validators.required, Validators.maxLength(100)]],
      nrc: ['', [Validators.required, Validators.maxLength(20)]],
      rubro: ['', [Validators.required, Validators.maxLength(25)]],
      tipoOrganizacion: ['', Validators.required],
      calificacion: ['', [Validators.required, Validators.maxLength(1)]],
      contactosLista:['',Validators.required]
    })
   /* this.activateRoute.params.subscribe(parametro => {
      this.parametro = parametro["id"];

      if (this.parametro == "new") {
        this.mensaje = "Ingrese una nueva empresa";
      } else {
        this.mensaje = "Modifique la empresa";
        this._empresaService.empresaGetById(Number(this.parametro)).subscribe(data => {
          console.log("Data para mostrar en el formulario", data);
          this.form.setValue(data);
        }, error => {
          console.log(error);
        })
      }
    });*/

  }

  ngOnInit(): void {
    this.obtenerEmpresas();
    /*this._empresaService.getOrganizaciones().subscribe((res: any[]) => {
     // console.log(res);
      this.organizaciones = res;
    })*/
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
  /*agregarEmpresa() {
    if (this.parametro == "new"){
      this.form.controls["idperfil"].setValue(0);
      this.form.controls["calificacion"].setValue(0);
      this._empresaService.saveEmpresa(this.form.value).subscribe(data => {
      this.toastr.success('la empresa fue registrada con exito', 'Producto registrado');
      this.router.navigate(["app-crear-empresa"]);
    }, error => {
      this.toastr.error('Upsss.... ocurrio un error', 'Error');
      console.log(error);
    })
  }else{
    this._empresaService.editarEmpresa(Number(this.parametro), this.form.value).subscribe(data => {
      this.router.navigate(["app-lista-producto"]);
    }, error => {
      console.log(error);
    })
  }*/
  agregarEmpresa(){
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
      calificacion:this.form.get('calificacion')?.value,
      idperfil:this.form.get('idperfil')?.value,
      contactosLista:this.form.get('contactosLista')?.value

    }
    this._empresaService.saveEmpresa(empresa).subscribe(data => {
      this.toastr.success('La empresa fue registrado con exito', 'Empresa registrado');
      this.obtenerEmpresas();
      this.form.reset();
      this.router.navigate(['/app-crear-empresa']);
    }, error => {
      this.toastr.error('Upsss.... ocurrio un error', 'Error');
      console.log(error);
    })
    
  }
  /*eliminarEmpresa(index: number) {
    this.lista.splice(index, 1)
    this.toastr.error('La empresa fue eliminada con éxito', 'Empresa eliminada')
  }*/
  onChange(event: any) {/*
    this.opcionSeleccionada = event.target.value*/
  }
  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
}