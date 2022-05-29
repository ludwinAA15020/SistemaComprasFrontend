import { Component, Input, OnInit } from '@angular/core';
import { Perfil } from 'src/app/interfaces/perfil';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ver-perfil',
  templateUrl: './ver-perfil.component.html',
  styleUrls: ['./ver-perfil.component.css']
})
export class VerPerfilComponent implements OnInit {
  @Input() perfiles:any

  constructor(
    private router:Router
  ){ }

  ngOnInit(): void {
  }
  verReferencia(index: number) {
    this.router.navigate(['/app-listado-referencias', index]);

  }
  sucursales(index: number) {
    this.router.navigate(['/app-agregar-sucursal', index]);

  }

}
