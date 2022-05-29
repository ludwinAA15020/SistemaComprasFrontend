import { Component, Input, OnInit } from '@angular/core';
import { Referencia } from 'src/app/interfaces/referencia';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-referencias',
  templateUrl: './listado-referencias.component.html',
  styleUrls: ['./listado-referencias.component.css']
})

export class ListadoReferenciasComponent implements OnInit {
  @Input() referencias: any

  constructor(
    private toastr: ToastrService,
    private router:Router,
  ) { }

  ngOnInit(): void {
  }
  verReferencia(index: number) {
    this.router.navigate(['/app-listado-referencia', index]);

  }
  eliminarReferencia(index:number){
    this.referencias.splice(index,1)
    this.toastr.error('La referencia fue eliminada con éxito','Referencia eliminada')
  }
}
