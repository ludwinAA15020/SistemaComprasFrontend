import { Component, OnInit } from '@angular/core';
import { Empresa } from './../../interfaces/empresa';

@Component({
  selector: 'app-listado-empresas',
  templateUrl: './listado-empresas.component.html',
  styleUrls: ['./listado-empresas.component.css']
})
export class ListadoEmpresasComponent implements OnInit {
  empresas: Empresa[] = [
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
    }
  ];
  constructor() {
  }

  ngOnInit(): void {
  }

}
