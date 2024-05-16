import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // este hay que ctrearlo por que no lo trae 
import { RouterOutlet } from '@angular/router';
import {NavegacionComponent}from "./components/navegacion/navegacion.component";
import {InicioComponent}from "./components/inicio/inicio.component"
import {ContactosComponent}from "./components/contactos/contactos.component"
import {ProductosComponent}from "./components/productos/productos.component"
import {NosotrosComponent}from "./components/nosotros/nosotros.component"
import {ServiciosComponent}from "./components/servicios/servicios.component"
import {RegistrosComponent}from "./components/registros/registros.component"
import {IniciarSesionComponent}from "./components/iniciar-sesion/iniciar-sesion.component"
import { PrivadoComponent } from "./components/privado/privado.component"
import {NoEncontradoComponent}from "./components/no-encontrado/no-encontrado.component"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,NavegacionComponent,InicioComponent,ContactosComponent,ProductosComponent,NosotrosComponent,ServiciosComponent,
    RegistrosComponent,IniciarSesionComponent,PrivadoComponent,NoEncontradoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
// en app.componnet.ts se importa lo que vamos creando desde la primera carpeta que en este caso fue navegacion luego todo lo que lleva la navegación  ojo y se debe importar tambien en la palabra imports lo que se importo arriba