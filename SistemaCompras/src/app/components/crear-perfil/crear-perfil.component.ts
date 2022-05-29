import { Component, OnInit, Input} from '@angular/core';
import { Perfil } from 'src/app/interfaces/perfil'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
      /*nombreCeo: 'Ingrid',
      nombreGerente: 'Karla',
      nombreDirector: 'Elmer',
      escritura: 'Escritura',
      razonSocial: 'Razón social'
    }*/
  ];
  form: FormGroup;
  constructor(private fb: FormBuilder, 
    private toastr: ToastrService,private router:Router) {
    this.form = this.fb.group({
      nombreCeo: ['', [Validators.required, Validators.maxLength(25)]],
      nombreGerente: ['', [Validators.required, Validators.maxLength(25)]],
      nombreDirector: ['', [Validators.required, Validators.maxLength(25)]],
      escritura: ['', [Validators.required, Validators.maxLength(25)]],
      razonSocial: ['', [Validators.required, Validators.maxLength(25)]],
      
    })
  }

  ngOnInit(): void {
  }
  agregarPerfil() {
    const perfil: any = {
      nombreCeo: this.form.get('nombreCeo')?.value,
      nombreDirector: this.form.get('nombreDirector')?.value,
      nombreGerente: this.form.get('nombreGerente')?.value,
      escritura: this.form.get('escritura')?.value,
      razonSocial: this.form.get('razonSocial')?.value,
    }
    this.lista.push(perfil);

    this.toastr.success('El perfil fue registrado con exito!', 'Perfil Registrado');
    this.form.reset();
    this.router.navigate(['/app-crear-perfil']);
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
