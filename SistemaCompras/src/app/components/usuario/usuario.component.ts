import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  form: FormGroup;
  Roles: any[] = [];
  Proveedor: any[] = [];

  constructor(
    private fb: FormBuilder,
    private _usuarioService: UsuarioService,
    private router: Router,
    private toastr: ToastrService,
  ) {

    this.form = this.fb.group({  
      nombreusuario: ['', [Validators.required, Validators.minLength(3)]],
      correo: ['', [Validators.required, Validators.min(0)]],
      idrol: ['', Validators.required],
      contra: [''],
      idproveedores: [''],


    })

  }

  ngOnInit(): void {
    this.obtenerroles();
    this.obtenerProveedor();
  }

  guardarUsuario() { 
    console.log(JSON.stringify(this.form.value));
    this._usuarioService.saveUsuario(this.form.value).subscribe(data => {
      this.toastr.success('El Usuario fue registrado con exito', 'Usuario registrado');
      this.router.navigate(["app-lista-producto"]);
    }, error => {
      this.toastr.error('Upsss.... ocurrio un error', 'Error');
    })


  }
  obtenerroles() {
    this._usuarioService.getcategorias().subscribe((res: any[]) => {
      // console.log(res);
      this.Roles = res;
    })
  }
  obtenerProveedor() {
    this._usuarioService.getproveedor().subscribe((res: any[]) => {
      // console.log(res);
      this.Proveedor = res;
    })
  }

  cancelar() {
    this.router.navigate(["app-lista-producto"]);
  }

}
