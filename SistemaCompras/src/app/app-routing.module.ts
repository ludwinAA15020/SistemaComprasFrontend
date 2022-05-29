import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEmpresaComponent } from './components/crear-empresa/crear-empresa.component';
import { ListadoEmpresasComponent } from './components/listado-empresas/listado-empresas.component';
import { CrearEvaluacionComponent } from './components/crear-evaluacion/crear-evaluacion.component';
import { ProductosComponent } from './components/productos/productos.component'
import { ListaProductoComponent } from './components/lista-producto/lista-producto.component';
import { DataTablesModule } from 'angular-datatables';
import { HttpClient } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: ListadoEmpresasComponent },
  { path: 'app-crear-evaluacion', component: CrearEvaluacionComponent },
  { path: 'app-crear-empresa', component:CrearEmpresaComponent},
  { path: 'app-crear-producto/:id', component:ProductosComponent},
  { path: 'app-lista-producto', component:ListaProductoComponent},

  //{ path: 'editar/:id', component: AgregarEditarComentarioComponent },
  { path: '**',redirectTo:'app-listado-empresas',pathMatch:'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    DataTablesModule,
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
