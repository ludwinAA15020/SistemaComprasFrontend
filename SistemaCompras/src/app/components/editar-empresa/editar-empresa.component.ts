import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpresaService } from 'src/app/services/empresa.service';
import { ActivatedRoute,Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-empresa',
  templateUrl: './editar-empresa.component.html',
  styleUrls: ['./editar-empresa.component.css']
})
export class EditarEmpresaComponent implements OnInit {
  empresa:any
  id:number|undefined

  constructor(
    private fb: FormBuilder,
    private route:ActivatedRoute,
    private _empresa:EmpresaService,
    private router:Router,
    private toastr: ToastrService
    ){ 
    this.form = this.fb.group({
      idperfil: ['0'],
      nombreproveedor: [''],
      representante: [''],
      direccionCompania: [''],
      telefonoCompania: [''],
      faxCompania: [''],
      movilCompania: [''],
      email: [''],
      website: [''],
      tipoOrganizacion: [''],
      nit: [''],
      nrc: [''],
      rubro: ['']
    })
  }

  ngOnInit(): void {
    this.id=Number(this.route.snapshot.params['id']);
    this.actualizarEmpresa(this.id)
  }
  form: FormGroup;

  actualizarEmpresa(index:number){
    this._empresa.empresaGetById(index).subscribe(data=>{
      console.log("Data para mostrar en el formulario",data);
      this.form.setValue(data);
    }, error => {
      console.log(error);
    });
  }
  actualizar(){
    this._empresa.saveEmpresa(this.form).subscribe(data => {
      this.toastr.success('La empresa fue registrado con exito', 'Empresa registrado');
    })
  }
}
