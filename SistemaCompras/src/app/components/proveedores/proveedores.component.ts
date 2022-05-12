import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {
  listProducto: any[]=[
   {id_producto:"Siman", nombre_producto:"116", caracteristica:"sgfsgfs", medida:"884"},
{id_producto:"farmacia", nombre_producto:"116", caracteristica:"sgfsgfs", medida:"5151"},
    {id_producto:"Rabel", nombre_producto:"116", caracteristica:"sgfsgfs", medida:"1251"},
  ];

  form: FormGroup;

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

  agregarProducto(){
    const producto: any ={
id_producto:this.form.get('id_producto')?.value,
nombre_producto:this.form.get('nombre_producto')?.value,
caracteristica:this.form.get('caracteristica')?.value,
medida:this.form.get('medida')?.value,

    }
    this.listProducto.push(producto)
    this.toastr.success('El Producto fue registrado con exito', 'Producto registrado');
    this.form.reset();
  }

  eliminarProducto(index: number){
    this.listProducto.splice(index, 1);
    this.toastr.error('El producto fue eliminado con exito','Producto eliminado')

  }

}
