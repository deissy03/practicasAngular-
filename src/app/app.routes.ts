import { Routes } from '@angular/router';
import {InicioComponent}from "./components/inicio/inicio.component"
import {ProductosComponent}from "./components/productos/productos.component"
import {NosotrosComponent}from "./components/nosotros/nosotros.component"
import {ServiciosComponent}from "./components/servicios/servicios.component"
import {ContactosComponent}from "./components/contactos/contactos.component"
import {RegistrosComponent}from "./components/registros/registros.component"
import {IniciarSesionComponent}from "./components/iniciar-sesion/iniciar-sesion.component"
import { PrivadoComponent } from "./components/privado/privado.component"
import {NoEncontradoComponent}from "./components/no-encontrado/no-encontrado.component"



export const routes: Routes = [
    {path:"inicio", component: InicioComponent, title:"Inicio"},
    {path:"productos", component:ProductosComponent},
    {path:"nosotros", component:NosotrosComponent},
    {path:"servicios", component:ServiciosComponent},
    {path:"contactos", component:ContactosComponent},
    {path:"registros", component:RegistrosComponent},
    {path:"iniciar sesion", component:IniciarSesionComponent},
    {path:"privado", component:PrivadoComponent},
    {path:"**", component:NoEncontradoComponent, title:"404"},//"**" significa otra ruta que no existe indica no encontrado
    {path:"",redirectTo:"inicio", pathMatch:"full" }, //""  string vacio  hace referencia a la ruta de raiz se debe agregar la propiedad pathMatch:"full"

];

