import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { mergeScan } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import Swal from  'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor( private fb: FormBuilder,
    private _LoginService: LoginService,
    private router: Router) { 

    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
  
    })
  }

 

  ngOnInit(): void {
  }

 async ingresar(){  
    if(this.form.valid){
   const email=this.form.value.email+'/';
   const password=this.form.value.password+'/';   
  await this._LoginService.loginUser(String(email), String(password)).subscribe(data => {
      if(data==null){        
        Swal.fire('Error', 'Credenciales Incorrectas null', 'error');     
    }else{ 
      Swal.fire('Exito', 'Credenciales Correctas', 'info'); 
      sessionStorage.setItem("usuario",data.nombreusuario);
      sessionStorage.setItem("idusuario",data.idusuario.toString());
      sessionStorage.setItem("role",data.idrol.toString());
      window.location.href = "app-lista-producto";
     //this.router.navigate([`app-lista-producto`]);
  }
  }
, error => {
  Swal.fire('Error', 'Ingrese sus Credenciales', 'error');
  })
  
}else{
  Swal.fire('Error', 'No Valido', 'error');
}
    
 }

}
