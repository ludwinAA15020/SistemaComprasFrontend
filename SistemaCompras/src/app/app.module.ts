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
<<<<<<< HEAD
import { CrearReferenciaComponent } from './components/crear-referencia/crear-referencia.component';
import { CrearPerfilComponent } from './components/crear-perfil/crear-perfil.component';
import { VerEmpresaComponent } from './components/ver-empresa/ver-empresa.component';
import { VerPerfilComponent } from './components/ver-perfil/ver-perfil.component';
import { ListadoReferenciasComponent } from './components/listado-referencias/listado-referencias.component';
import { VerReferenciaComponent } from './components/ver-referencia/ver-referencia.component';
import { AgregarSucursalComponent } from './components/agregar-sucursal/agregar-sucursal.component';
import { AgregarCompaniaComponent } from './components/agregar-compania/agregar-compania.component';
=======
import { ListaProductoComponent } from './components/lista-producto/lista-producto.component';
import { DataTablesModule } from "angular-datatables";
import {MatTableModule} from '@angular/material/table';
import { FiltroPipe } from './components/pipes/filtro.pipe';
>>>>>>> f78d41f3b171601a73c618ab43ec66a430b18cca

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
<<<<<<< HEAD
    CrearReferenciaComponent,
    CrearPerfilComponent,
    VerEmpresaComponent,
    VerPerfilComponent,
    ListadoReferenciasComponent,
    VerReferenciaComponent,
    AgregarSucursalComponent,
    AgregarCompaniaComponent,
=======
    ListaProductoComponent,
    FiltroPipe
    
>>>>>>> f78d41f3b171601a73c618ab43ec66a430b18cca

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
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
