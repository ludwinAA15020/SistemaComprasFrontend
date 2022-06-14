import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requesicion',
  templateUrl: './requesicion.component.html',
  styleUrls: ['./requesicion.component.css']
})
export class RequesicionComponent implements OnInit {
  form: FormGroup;
  

 

  constructor( 
    private fb: FormBuilder,
    private router: Router,


    
  ) {
    this.form = this.fb.group({
      idrequisicion: [''],
      nivel: ['0'],
      nombreprod: [''],
      precioprod: [''],
      medidasprod: [''],
      marcaprod: [''],
      descripcionprod: [''],
      utilidadprod: [''],
      garantiaprod: [''],
      imagenprod: [''],
  
    })
   }

  ngOnInit(): void {
  }
  guardarRequisicion(){

  }
  cancelar(){
    this.router.navigate(["app-lista-producto"]);
  }

}
