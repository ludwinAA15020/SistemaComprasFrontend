import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Importar componentes de empresas
import { CrearEmpresaComponent } from './components/crear-empresa/crear-empresa.component';
import { ListadoEmpresasComponent } from './components/listado-empresas/listado-empresas.component';

//Importar componentes de productos
import { ProductosComponent } from './components/productos/productos.component';
import { ListaProductoComponent } from './components/lista-producto/lista-producto.component';

//Importar componentes de referencias
import { CrearReferenciaComponent } from './components/crear-referencia/crear-referencia.component';
import { ListadoReferenciasComponent } from './components/listado-referencias/listado-referencias.component';

//Importar componentes sucursales
import { AgregarSucursalComponent } from './components/agregar-sucursal/agregar-sucursal.component';
import { ListadoSucursalesComponent } from './components/listado-sucursales/listado-sucursales.component';

//Imortar componente evaluaciòn
import { CrearEvaluacionComponent } from './components/crear-evaluacion/crear-evaluacion.component';

//Importar componente perfil
import { VerPerfilComponent } from './components/ver-perfil/ver-perfil.component';
import { CrearPerfilComponent } from './components/crear-perfil/crear-perfil.component';
 
//Importar requesicion
import { ListaRequesicionComponent } from './components/lista-requesicion/lista-requesicion.component';
import { RequesicionComponent } from './components/requesicion/requesicion.component';


import { LoginComponent } from './components/login/login.component';

import { EditarEmpresaComponent } from './components/editar-empresa/editar-empresa.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  //Rutas para crud empresas
  { path: 'app-empresas/:id', component: CrearEmpresaComponent },
  { path: 'app-listado-empresas', component: ListadoEmpresasComponent },

  //Rutas para crud empresas
  { path: 'app-crear-requisicion/:id', component: RequesicionComponent },
  { path: 'app-listado-requisicion', component: ListaRequesicionComponent},

  //Rutas para crud de productos
  { path: 'app-crear-producto/:id', component: ProductosComponent },
  { path: 'app-lista-producto', component: ListaProductoComponent },

  { path: 'app-login', component: LoginComponent },

  //Rutas para referencias
  { path: 'app-referencias/:id', component: CrearReferenciaComponent },
  { path: 'app-listado-referencias/:id', component: ListadoReferenciasComponent },
  
  //Rutas para sucursales
  { path: 'app-sucursales/:id', component: AgregarSucursalComponent },
  { path: 'app-listado-sucursales/:id', component: ListadoSucursalesComponent },

  //Rutas para perfil
  { path: 'app-perfil/:id', component: CrearPerfilComponent },
  { path: 'app-ver-perfil/:id', component: VerPerfilComponent },

  //Rutas para evaluaciòn
  { path: 'app-crear-evaluacion', component: CrearEvaluacionComponent },

  
  { path: '**', redirectTo:'/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
