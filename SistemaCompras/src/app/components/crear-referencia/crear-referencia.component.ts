import { Component, OnInit,Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tipoReferencia } from '../../interfaces/tipoReferencia';
import { ReferenciaService } from 'src/app/services/referencia.service';
import { PerfilReferenciaService } from 'src/app/services/perfilReferencia.service';

@Component({
  selector: 'app-crear-referencia',
  templateUrl: './crear-referencia.component.html',
  styleUrls: ['./crear-referencia.component.css']
})
export class CrearReferenciaComponent implements OnInit {
  selectedtipoRef: string = '';
  id:number|undefined
  msj:string="Agregar";
  tiposRef: tipoReferencia[] = [
    { nombre: 'Bancaria' },
    { nombre: 'Comercial' }
  ];
  form: FormGroup;
  form2:FormGroup;
  constructor(
    private fb: FormBuilder, 
    private toastr: ToastrService,
    private router:Router,
    private _referenciaService:ReferenciaService,
    private _perfilReferenciaService:PerfilReferenciaService,
    private route:ActivatedRoute
    ) {
    this.form = this.fb.group({
      nombreCompania: ['', [Validators.required, Validators.maxLength(25)]],
      nombreContacto: ['', [Validators.required, Validators.maxLength(50)]],
      telefonoContacto: ['', [Validators.required, Validators.maxLength(9)]],
      tipoReferencia: ['', Validators.required],
    }),
    this.form2 = this.fb.group({
      idperfil:[],
      idreferencia:[]
    })
  }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.id = id
  }
  agregarReferencia() {
      const referencia: any = {
        nombreCompania: this.form.get('nombreCompania')?.value,
        nombreContacto: this.form.get('nombreContacto')?.value,
        telefonoContacto: this.form.get('telefonoContacto')?.value,
        tipoReferencia: this.form.get('tipoReferencia')?.value
  
      }
      const perfilReferencia:any = {
        idperfil:this.id,
        idreferencia:referencia.idreferencia
      }
      this._referenciaService.saveReferencia(referencia).subscribe(data => {
        this.toastr.success('La referencia fue registrado con exito', 'Referencia registrado');
        this.form.reset();
      }, error => {
        this.toastr.error('Upsss.... ocurrio un error', 'Error');
        console.log(error);
      }),console.log(perfilReferencia)
      this._perfilReferenciaService.savePerfilReferencia(perfilReferencia).subscribe(data=>{
        
      },error=>{
        console.log(error); 
      }
      );
    
  }
 

}
/*onChange(event: any) {
    this.selectedtipoRef = event.target.value
  }
  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }*/