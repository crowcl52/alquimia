import {RouterModule, Routes} from '@angular/router';

import {InicioComponent} from "./components/inicio/inicio.component";
import {ContactoComponent} from "./components/contacto/contacto.component";
import {CatalogoComponent} from "./components/catalogo/catalogo.component";

const app_routes: Routes = [
    {path:'inicio',component:InicioComponent},
    {path:'catalogo',component:CatalogoComponent},
    {path:'contacto',component:ContactoComponent},
    {path:'**', pathMatch:'full', redirectTo:'inicio'}
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);