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
import { ListaProductoComponent } from './components/lista-producto/lista-producto.component';
import { DataTablesModule } from "angular-datatables";
import {MatTableModule} from '@angular/material/table';
import { FiltroPipe } from './components/pipes/filtro.pipe';

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
    ListaProductoComponent,
    FiltroPipe
    

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
