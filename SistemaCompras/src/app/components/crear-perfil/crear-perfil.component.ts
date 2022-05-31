import { Component, OnInit, Input} from '@angular/core';
import { Perfil } from 'src/app/interfaces/perfil'
import { Router,ActivatedRoute} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PerfilService } from 'src/app/services/perfil.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-crear-perfil',
  templateUrl: './crear-perfil.component.html',
  styleUrls: ['./crear-perfil.component.css']
})
export class CrearPerfilComponent implements OnInit {
  selectedCargo = 0;
  @Input() lista: any[] = [
    /*{
      /*nombreceo: 'Ingrid',
      nombregerente: 'Karla',
      directorareaLista: 'Elmer',
      escritura: 'Escritura',
      razonSocial: 'Razón social'
    }*/
  ];
  form: FormGroup;
  constructor(private fb: FormBuilder, 
    private toastr: ToastrService,
    private router:Router,
    private _perfilService:PerfilService
    ) {
    this.form = this.fb.group({
      nombreceo: ['', [Validators.required, Validators.maxLength(25)]],
      nombregerente: ['', [Validators.required, Validators.maxLength(25)]],
      directorareaLista: ['', [Validators.required, Validators.maxLength(25)]],
      escritura: ['', [Validators.required, Validators.maxLength(25)]],
      razonSocial: ['', [Validators.required, Validators.maxLength(25)]],
      
    })
  }

  ngOnInit(): void {
    this.obtenerPerfiles()
  }
  agregarPerfil() {
    const perfil: any = {
      nombreceo: this.form.get('nombreceo')?.value,
      directorareaLista: this.form.get('directorareaLista')?.value,
      nombregerente: this.form.get('nombregerente')?.value,
      escritura: this.form.get('escritura')?.value,
      razonSocial: this.form.get('razonSocial')?.value,
    } 
    this._perfilService.savePerfil(perfil).subscribe(data => {
      this.toastr.success('La empresa fue registrado con exito', 'Empresa registrado');
      this.obtenerPerfiles();
      this.form.reset();
      this.router.navigate(['/app-crear-empresa']);
    }, error => {
      this.toastr.error('Upsss.... ocurrio un error', 'Error');
      console.log(error);
    })

  } 
  obtenerPerfiles() {
    this._perfilService.getListPerfiles().subscribe(data => {
      console.log(data);
      this.lista = data;
      console.log(this.lista);
    }, error => {
      console.log(error);
    })

  }
  radioChangeHandler(event: any) {
    this.selectedCargo = event.target.value
  }
  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

}
