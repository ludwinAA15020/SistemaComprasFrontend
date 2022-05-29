import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductoService } from 'src/app/services/producto.service';


@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})

export class ListaProductoComponent implements OnInit {
  public listProducto: any[] = [];
  public page:number=0;
  public search:string='';
  

   constructor( private _productoService: ProductoService, private router: Router,
    private toastr: ToastrService
   
    ){
     
   }
  
   ngOnInit(): void {
    this.obtenerProducto();
     
  }
  obtenerProducto() {
    this._productoService.getListProductos().subscribe(data => {
       this.listProducto = data;
      
    //  console.log(this.listProducto);
    }, error => {
      console.log(error);
    })
    

  }
  editarProducto(producto:any){
   // console.log(producto);
    this.router.navigate([`app-crear-producto//${producto.idproducto}`]);
  }
  nuevo(){
    this.router.navigate([`app-crear-producto/new`]);
  }
  
 eliminarProducto(id: number){
  //  this.listProducto.splice(index, 1); //Este metodo es para borrar en la psocison de la tabla nada mas, no de la base
  this._productoService.deleteProducto(id).subscribe(data => {
    this.toastr.error('El producto fue eliminado con exito', 'Producto eliminado')
    this.obtenerProducto();
  }, error => {
    console.log(error);

  })
}

nextPage(){
   this.page+=5;
}
prevPage(){
  if (this.page>0)  
     this.page-=5;
}
onSearchPokemon( search: string ) {
  this.page = 0;
  this.search = search;
}


}
