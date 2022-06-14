import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './components/productos/productos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{ HttpClient, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { Routes, RouterModule } from '@angular/router';

import { CrearEmpresaComponent } from './components/crear-empresa/crear-empresa.component';
import { ListadoEmpresasComponent } from './components/listado-empresas/listado-empresas.component';
import { CrearEvaluacionComponent } from './components/crear-evaluacion/crear-evaluacion.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CrearReferenciaComponent } from './components/crear-referencia/crear-referencia.component';
import { CrearPerfilComponent } from './components/crear-perfil/crear-perfil.component';
import { VerEmpresaComponent } from './components/ver-empresa/ver-empresa.component';
import { VerPerfilComponent } from './components/ver-perfil/ver-perfil.component';
import { ListadoReferenciasComponent } from './components/listado-referencias/listado-referencias.component';
import { VerReferenciaComponent } from './components/ver-referencia/ver-referencia.component';
import { AgregarSucursalComponent } from './components/agregar-sucursal/agregar-sucursal.component';
import { AgregarCompaniaComponent } from './components/agregar-compania/agregar-compania.component';
import { ListaProductoComponent } from './components/lista-producto/lista-producto.component';
import { DataTablesModule } from 'angular-datatables';
import { FiltroPipe } from './components/pipes/filtro.pipe';
import { EditarEmpresaComponent } from './components/editar-empresa/editar-empresa.component';
import { ListadoSucursalesComponent } from './components/listado-sucursales/listado-sucursales.component';
import { CrearCompaniaComponent } from './components/crear-compania/crear-compania.component';
import { RequesicionComponent } from './components/requesicion/requesicion.component';
import { ListaRequesicionComponent } from './components/lista-requesicion/lista-requesicion.component';
import { FiltroPerfilesPipe } from './components/pipes/filtro-perfiles.pipe';
import { FiltroEmpresasPipe } from './components/pipes/filtro-empresas.pipe';


const routes: Routes = [
  { path: 'app-listado-empresas', component: ListadoEmpresasComponent },
  { path: 'app-crear-evaluacion', component: CrearEvaluacionComponent },
  { path: 'app-crear-empresa', component:CrearEmpresaComponent},
  { path: '**',redirectTo:'app-listado-empresas',pathMatch:'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    CrearEmpresaComponent,
    ListadoEmpresasComponent,
    CrearEvaluacionComponent,
    NavbarComponent,
    CrearReferenciaComponent,
    CrearPerfilComponent,
    VerEmpresaComponent,
    VerPerfilComponent,
    ListadoReferenciasComponent,
    VerReferenciaComponent,
    AgregarSucursalComponent,
    AgregarCompaniaComponent,
    ListaProductoComponent,
    FiltroPipe,
    EditarEmpresaComponent,
    ListadoSucursalesComponent,
    CrearCompaniaComponent,
    ListaRequesicionComponent,
    RequesicionComponent,
    FiltroPerfilesPipe,
    FiltroEmpresasPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    DataTablesModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
