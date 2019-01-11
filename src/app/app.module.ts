import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { RegistroAlternativoComponent } from './registro-alternativo/registro-alternativo.component';
import { Registro02Component } from './registro02/registro02.component';
import { PantallaInicioComponent } from './pantalla-inicio/pantalla-inicio.component';
import { NavVarComponent } from './nav-var/nav-var.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioSesionComponent,
    LoginComponent,
    RegistroComponent,
    RegistroAlternativoComponent,
    Registro02Component,
    PantallaInicioComponent,
    NavVarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
