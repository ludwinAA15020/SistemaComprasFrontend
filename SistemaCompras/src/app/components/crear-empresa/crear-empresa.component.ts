import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-crear-empresa',
  templateUrl: './crear-empresa.component.html',
  styleUrls: ['./crear-empresa.component.css']
})

export class CrearEmpresaComponent implements OnInit {

  empresas: any[] = [
    {
    nit:'1234-567891-234-5',
    nombre:'Vidri',
    representante:'Juan peréz',
    direccion:'direccion1',
    email:'example@hotmail.com',
    telefono:'12345678',
    fax: '12345678',
    movil: '12345678',
    web: 'www.example.com',
    ncr:'1234-567891-234-5',
    rubro:'Papeleria',
    logo:'logo1',
    ubicacion:'ubicacion1'
  }];
    form:FormGroup;

    constructor(private fb:FormBuilder,private toastr: ToastrService) { 
      this.form = this.fb.group({
        nit: ['',[Validators.required, Validators.maxLength(17)]],
        nombre:['',[Validators.required, Validators.maxLength(25)]],
        representante:['',[Validators.required, Validators.maxLength(25)]],
        direccion:['',[Validators.required, Validators.maxLength(50)]],
        email:['',[Validators.required, Validators.maxLength(25)]],
        telefono:['',[Validators.required, Validators.maxLength(9)]],
        fax:['',[Validators.required, Validators.maxLength(9)]],
        movil:['',[Validators.required, Validators.maxLength(9)]],
        web:['',[Validators.required, Validators.maxLength(25)]],
        ncr:['',[Validators.required, Validators.maxLength(17)]],
        rubro:['',[Validators.required, Validators.maxLength(25)]],
        //tipo_empresa_id:['',Validators.required],
        logo:['',[Validators.required, Validators.maxLength(50)]],
        ubicacion:['',[Validators.required, Validators.maxLength(50)]]
      })
    }
  
    ngOnInit(): void {
    /*  $(document).ready(function(){
        $('#nuevaEmpresa').on("click", function(){
          $('#miModal').modal()
        })
      })*/
    }
    obtenerEmpresas() {/*
      this._tarjetaService.getListTarjetas().subscribe(data => {
        console.log(data);
        this.listTarjetas = data;
      }, error => {
        console.log(error);
      })*/
    }
    agregarEmpresa() {
      const empresa: any = {
        nit: this.form.get('nit')?.value,
        nombre: this.form.get('nombre')?.value,
        representante: this.form.get('representante')?.value,
        direccion: this.form.get('direccion')?.value,
        email: this.form.get('email')?.value,
        telefono: this.form.get('telefono')?.value,
        fax: this.form.get('fax')?.value,
        movil: this.form.get('movil')?.value,
        web: this.form.get('web')?.value,
        ncr: this.form.get('ncr')?.value,
        rubro: this.form.get('rubro')?.value,
        logo: this.form.get('logo')?.value,
        ubicacion: this.form.get('logo')?.value,
        //this.toastr.success('La empresa fue registrada con éxito!', 'Empresa Registrada')
      }
      this.empresas.push(empresa);
      this.toastr.success('La empresa fue registrada con exito!', 'Empresa Registrada');
      this.form.reset();
    } 
    eliminarEmpresa(index:number){
      this.empresas.splice(index,1)
      this.toastr.error('La empresa fue eliminada con éxito','Empresa eliminada')
    }
      displayStyle= "none";
  
      agregarPerfil() {
        this.displayStyle = "block";
      }
      closePopup() {
        this.displayStyle = "none";
      }
}
