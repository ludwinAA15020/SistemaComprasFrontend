import { Component, OnInit,Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tipoReferencia } from '../../interfaces/tipoReferencia';
import { ReferenciaService } from 'src/app/services/referencia.service';

@Component({
  selector: 'app-crear-referencia',
  templateUrl: './crear-referencia.component.html',
  styleUrls: ['./crear-referencia.component.css']
})
export class CrearReferenciaComponent implements OnInit {
  selectedtipoRef: string = '';
  tiposRef: tipoReferencia[] = [
    { nombre: 'Bancaria' },
    { nombre: 'Comercial' }
  ];

  @Input() lista: any[] = [];

  form: FormGroup;
  constructor(
    private fb: FormBuilder, 
    private toastr: ToastrService,
    private router:Router,
    private _referenciaService:ReferenciaService
    ) {
    this.form = this.fb.group({
      nombreCompania: ['', [Validators.required, Validators.maxLength(25)]],
      nombreContacto: ['', [Validators.required, Validators.maxLength(50)]],
      telefonoContacto: ['', [Validators.required, Validators.maxLength(9)]],
      tipoReferencia: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    //this.obtenerReferencias()
  }
  agregarReferencia() {
    const referencia: any = {
      nombreCompania: this.form.get('nombreCompania')?.value,
      nombreContacto: this.form.get('nombreContacto')?.value,
      telefonoContacto: this.form.get('telefonoContacto')?.value,
      tipoReferencia: this.form.get('tipoReferencia')?.value

    }
    this._referenciaService.saveReferencia(referencia).subscribe(data => {
      this.toastr.success('La referencia fue registrado con exito', 'Referencia registrado');
      this.form.reset();
      this.router.navigate(['/app-crear-referencia']);
    }, error => {
      this.toastr.error('Upsss.... ocurrio un error', 'Error');
      console.log(error);
    })
  }
  onChange(event: any) {
    this.selectedtipoRef = event.target.value
  }
  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

}
