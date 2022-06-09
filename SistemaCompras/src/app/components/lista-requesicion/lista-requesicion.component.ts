import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequisicionService } from 'src/app/services/prequesicion.service';

@Component({
  selector: 'app-lista-requesicion',
  templateUrl: './lista-requesicion.component.html',
  styleUrls: ['./lista-requesicion.component.css']
})
export class ListaRequesicionComponent implements OnInit {
  public listRequisicion: any[] = [];
  public page: number = 0;

  constructor(private router: Router, private _requisicionService: RequisicionService) { }

  ngOnInit(): void {
    this.obtenerRequisicion()
  }
  editarRequesicion() {
    // console.log(producto);
    this.router.navigate([`app-requesicion//${1}`]);
  }

  nuevo() {
    this.router.navigate([`app-crear-requisicion/new`]);
  }

  obtenerRequisicion() {
    this._requisicionService.getListRequisicion().subscribe(data => {
      this.listRequisicion = data;
       console.log(this.listRequisicion);
    }, error => {
      console.log(error);
    })


}
}
