import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEmpresaComponent } from './components/crear-empresa/crear-empresa.component';
import { ListadoEmpresasComponent } from './components/listado-empresas/listado-empresas.component';
import { CrearEvaluacionComponent } from './components/crear-evaluacion/crear-evaluacion.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CrearPerfilComponent } from './components/crear-perfil/crear-perfil.component';
import { CrearReferenciaComponent } from './components/crear-referencia/crear-referencia.component';
import { AgregarSucursalComponent } from './components/agregar-sucursal/agregar-sucursal.component';
import { ListaProductoComponent } from './components/lista-producto/lista-producto.component';

const routes: Routes = [
  { path: '', component:CrearEmpresaComponent},
  { path: 'app-crear-evaluacion', component: CrearEvaluacionComponent },
  { path: 'app-crear-empresa', component:CrearEmpresaComponent},
  { path: 'app-crear-producto', component:ProductosComponent},
  { path: 'app-crear-referencia', component:CrearReferenciaComponent},
  { path: 'app-crear-perfil', component:CrearPerfilComponent},
  { path: 'app-ver-perfil/:id', component: CrearPerfilComponent },
  { path: 'app-listado-referencias/:id', component: CrearReferenciaComponent },
  { path: 'app-agregar-sucursal', component: AgregarSucursalComponent },
  { path: 'app-agregar-sucursal/:id', component: AgregarSucursalComponent },
  { path: 'app-lista-producto', component:ListaProductoComponent },
  
  { path: '**',redirectTo:'app-listado-empresas',pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
