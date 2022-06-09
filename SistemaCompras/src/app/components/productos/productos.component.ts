import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  parametro: string = "";
  mensaje: string = "";
  Categorias: any[] = [];
  public previsualizacion: any=[];

  listProducto: any[] = [
  ];
  accion = 'Agregar';
  form: FormGroup;
  id: number | undefined;
  public archivos: any = []
  displayPosition: boolean = false;
  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private _productoService: ProductoService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer

    ) {
    this.form = this.fb.group({
      idproducto: [''],
      idcategoria: ['0'],
      nombreprod: [''],
      precioprod: [''],
      medidasprod: [''],
      marcaprod: [''],
      descripcionprod: [''],
      utilidadprod: [''],
      garantiaprod: [''],
      imagenprod: [''],

    })
    this.activateRoute.params.subscribe(parametro => {
      this.parametro = parametro["id"];

      if (this.parametro == "new") {
        this.mensaje = "Ingrese un nuevo producto";
      } else {
        this.mensaje = "Modifique el producto macho";
        this._productoService.productoGetById(Number(this.parametro)).subscribe(data => {
          console.log("Data para mostrar en el formulario",data);
          this.form.setValue(data);
        }, error => {
          console.log(error);
        })
        //Aqui tenes que llamar el getById
      //  this.productoService.getProductosById(Number(this.parametro)).subscribe(res=>{
       //   this.Form.setValue(res);
       // })
      }
    });
  }

  ngOnInit(): void {
    this.obtenerProducto();
    this._productoService.getcategorias().subscribe((res: any[]) => {
     // console.log(res);
      this.Categorias = res;
    })
  }
  obtenerProducto() {
    this._productoService.getListProductos().subscribe(data => {
    //  console.log(data);
      this.listProducto = data;
     // console.log(this.listProducto);
    }, error => {
      console.log(error);
    })

  }

  showPositionDialog() {
    this.displayPosition = true;
  }

  Capturarfile(event: any) {
    const archivoCapturado = event.target.files[0]
     this.archivos.push(archivoCapturado)
    this.extraerbase64(archivoCapturado).then((imagen: any)=>{
      this.previsualizacion=imagen.base;
      console.log(this.archivos);
    })

  }
 
//Metodo para guardar el producto o editarlo segun sea el caso
guardarProducto(){
  //si el parametro recibio es new, procedemos aguardarlo
  if (this.parametro == "new") {
    //Agregamos un nuevo productof
  //this.form.controls["imagenprod"]=this.archivos;
    this.form.controls["idproducto"].setValue(0);
    console.log(JSON.stringify(this.form.value));
    this._productoService.saveProducto(this.form.value).subscribe(data => {
      this.toastr.success('El Producto fue registrado con exito', 'Producto registrado');
      this.router.navigate(["app-lista-producto"]);
    }, error => {
      this.toastr.error('Upsss.... ocurrio un error', 'Error');
    })
  } else {
    console.log(this.parametro);
    //editamos el producto;
    this._productoService.editarProducto(Number(this.parametro), this.form.value).subscribe(data => {
      this.router.navigate(["app-lista-producto"]);
    }, error => {
      console.log(error);
    })

  }
}
cancelar(){
  this.router.navigate(["app-lista-producto"]);
}


extraerbase64 = ($event: any)=> new Promise((resolve, reject)=>{
  try {
    const unsafeImagen = window.URL.createObjectURL($event);
    const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImagen);
    const reader = new FileReader();
    reader.readAsDataURL($event);
    reader.onload = () => {
      resolve({
        base: reader.result
      });
    };
    reader.onerror = error=> {
      resolve({
        base: null
      });
    };
  } catch (e) {
    return null;
  }
  return null;
})



}