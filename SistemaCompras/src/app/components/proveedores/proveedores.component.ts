import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { subscribeOn } from 'rxjs';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {
  listProducto: any[]=[
 //  {id_producto:"Siman", nombre_producto:"116", caracteristica:"sgfsgfs", medida:"884"},
//{id_producto:"farmacia", nombre_producto:"116", caracteristica:"sgfsgfs", medida:"5151"},
  //  {id_producto:"Rabel", nombre_producto:"116", caracteristica:"sgfsgfs", medida:"1251"},
  ];
  accion='Agregar';
  form: FormGroup;
  id: number | undefined;

  constructor(private fb: FormBuilder,
     private toastr: ToastrService,
     private _productoService: ProductoService) {
    this.form=this.fb.group({
      id_producto:[''],
      nombre_producto:[''],
      caracteristica:[''],
      medida:['']
    })
   }

  ngOnInit(): void {
    this.obtenerProducto();
  }
obtenerProducto(){
  this._productoService.getListProductos().subscribe(data =>{
    console.log(data);
    this.listProducto=data;
    console.log(this.listProducto);
  }, error =>{
    console.log(error);
  })
  
}

guardarProducto(){
    const producto: any ={
     id_producto:this.form.get('id_producto')?.value,
      nombre_producto:this.form.get('nombre_producto')?.value,
      caracteristica:this.form.get('caracteristica')?.value,
      medida:this.form.get('medida')?.value,
    }
    if(this.id==undefined){
      //Agregamos un nuevo producto
      this._productoService.saveProducto(producto).subscribe(data=>{
        this.toastr.success('El Producto fue registrado con exito', 'Producto registrado');
        this.obtenerProducto();
        this.form.reset();
         },error=>{
           this.toastr.error('Upsss.... ocurrio un error','Error');
           console.log(error);
        }) 
    }else{
      //editamos el producto;
      producto.id_producto=this.id;
      this._productoService.editarProducto(this.id,producto).subscribe(data=>{
        this.form.reset();
       this.id=undefined;
       this.accion='Agregar';
       this.toastr.info('Producto actualizado con exito!','producto Actualizado');
       this.obtenerProducto();
      }, error=>{
        console.log(error);
      })

    }

          
    }

  eliminarProducto(id: number){
  //  this.listProducto.splice(index, 1); //Este metodo es para borrar en la psocison de la tabla nada mas, no de la base
   this._productoService.deleteProducto(id).subscribe(data =>{
    this.toastr.error('El producto fue eliminado con exito','Producto eliminado')
    this.obtenerProducto();
   },error =>{
     console.log(error);

   })
  }

  editarProducto(producto:any){
    //console.log(producto);
    this.accion='Editar';
    this.id=producto.id_producto;

    this.form.patchValue({
      id_producto:producto.id_producto,
      nombre_producto: producto.nombre_producto,
      caracteristica:producto.caracteristica,
      medida:producto.medida
    })


  }

}
