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

  ingresar(){ 
    if(this.form.valid){
   const email=this.form.value.email+'/';
   const password=this.form.value.password+'/';   
  this._LoginService.loginUser(String(email), String(password)).subscribe(data => {
    console.log("Data para mostrar en el formulario", data);
    if(data==null){        
        Swal.fire('Error', 'Credenciales Incorrectas', 'error');     
    }else{ 
      Swal.fire('Exito', 'Credenciales Correctas', 'info'); 
      sessionStorage.setItem("usuario",data.nombreusuario);
      sessionStorage.setItem("idusuario",data.idusuario.toString());
      sessionStorage.setItem("role",data.idrol.toString());
      this.router.navigate([`app-lista-producto`]);
  }
  }
, error => {
    console.log(error);
  })
  
}else{
  alert('Ingrese las credenciales');
}
    
 }

}
