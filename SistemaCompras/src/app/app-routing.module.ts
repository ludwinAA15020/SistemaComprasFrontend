import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEmpresaComponent } from './components/crear-empresa/crear-empresa.component';
import { ListadoEmpresasComponent } from './components/listado-empresas/listado-empresas.component';
import { CrearEvaluacionComponent } from './components/crear-evaluacion/crear-evaluacion.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component'
import { CrearPerfilComponent } from './components/crear-perfil/crear-perfil.component';
import { CrearReferenciaComponent } from './components/crear-referencia/crear-referencia.component';
import { AgregarSucursalComponent } from './components/agregar-sucursal/agregar-sucursal.component';

const routes: Routes = [
  { path: '', component:CrearEmpresaComponent},
  { path: 'app-crear-evaluacion', component: CrearEvaluacionComponent },
  { path: 'app-crear-empresa', component:CrearEmpresaComponent},
  { path: 'app-crear-proveedor', component:ProveedoresComponent},
  { path: 'app-crear-referencia', component:CrearReferenciaComponent},
  { path: 'app-crear-perfil', component:CrearPerfilComponent},
  { path: 'app-ver-perfil/:id', component: CrearPerfilComponent },
  { path: 'app-listado-referencias/:id', component: CrearReferenciaComponent },
  { path: 'app-agregar-sucursal', component: AgregarSucursalComponent },
  { path: 'app-agregar-sucursal/:id', component: AgregarSucursalComponent },
  { path: '**',redirectTo:'app-listado-empresas',pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
