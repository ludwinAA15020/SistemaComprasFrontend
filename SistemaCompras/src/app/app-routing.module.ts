import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEmpresaComponent } from './components/crear-empresa/crear-empresa.component';
import { ListadoEmpresasComponent } from './components/listado-empresas/listado-empresas.component';
import { CrearEvaluacionComponent } from './components/crear-evaluacion/crear-evaluacion.component';
<<<<<<< HEAD
import { ProveedoresComponent } from './components/proveedores/proveedores.component'
import { CrearPerfilComponent } from './components/crear-perfil/crear-perfil.component';
import { CrearReferenciaComponent } from './components/crear-referencia/crear-referencia.component';
import { AgregarSucursalComponent } from './components/agregar-sucursal/agregar-sucursal.component';
=======
import { ProductosComponent } from './components/productos/productos.component'
import { ListaProductoComponent } from './components/lista-producto/lista-producto.component';
import { DataTablesModule } from 'angular-datatables';
import { HttpClient } from '@angular/common/http';
>>>>>>> f78d41f3b171601a73c618ab43ec66a430b18cca

const routes: Routes = [
  { path: '', component:CrearEmpresaComponent},
  { path: 'app-crear-evaluacion', component: CrearEvaluacionComponent },
  { path: 'app-crear-empresa', component:CrearEmpresaComponent},
<<<<<<< HEAD
  { path: 'app-crear-proveedor', component:ProveedoresComponent},
  { path: 'app-crear-referencia', component:CrearReferenciaComponent},
  { path: 'app-crear-perfil', component:CrearPerfilComponent},
  { path: 'app-ver-perfil/:id', component: CrearPerfilComponent },
  { path: 'app-listado-referencias/:id', component: CrearReferenciaComponent },
  { path: 'app-agregar-sucursal', component: AgregarSucursalComponent },
  { path: 'app-agregar-sucursal/:id', component: AgregarSucursalComponent },
=======
  { path: 'app-crear-producto/:id', component:ProductosComponent},
  { path: 'app-lista-producto', component:ListaProductoComponent},

  //{ path: 'editar/:id', component: AgregarEditarComentarioComponent },
>>>>>>> f78d41f3b171601a73c618ab43ec66a430b18cca
  { path: '**',redirectTo:'app-listado-empresas',pathMatch:'full' },
];

@NgModule({
<<<<<<< HEAD
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
=======
  imports: [
    RouterModule.forRoot(routes),
    DataTablesModule,
    
  ],
  exports: [RouterModule]
>>>>>>> f78d41f3b171601a73c618ab43ec66a430b18cca
})
export class AppRoutingModule { }
