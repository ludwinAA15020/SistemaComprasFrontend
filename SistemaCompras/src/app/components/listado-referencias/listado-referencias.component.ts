import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { ReferenciaService } from 'src/app/services/referencia.service';

@Component({
  selector: 'app-listado-referencias',
  templateUrl: './listado-referencias.component.html',
  styleUrls: ['./listado-referencias.component.css']
})

export class ListadoReferenciasComponent implements OnInit {
  referencias: any[]=[];
  id:number|undefined

  constructor(
    private toastr: ToastrService,
    private router:Router,
    private _referenciaService:ReferenciaService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.obtenerReferencias()
    let id = Number(this.route.snapshot.paramMap.get('id'))
    this.id = id
  }
  editarReferencia(index: number) {
    this.router.navigate(['/app-referencias', index]);

  }
  obtenerReferencias() {
    this._referenciaService.getListReferencias().subscribe(data => {
      console.log(data);
      this.referencias = data;
      console.log(this.referencias);
    }, error => {
      console.log(error);
    })
  }
  eliminarReferencia(id: number) {
    //  this.listProducto.splice(index, 1); //Este metodo es para borrar en la psocison de la tabla nada mas, no de la base
    this._referenciaService.deleteReferencia(id).subscribe(data => {
      this.toastr.error('La referencia fue eliminada con exito', 'Referencia eliminada')
      this.obtenerReferencias();
    }, error => {
      console.log(error);

    })
  }
}
