import {RouterModule, Routes} from '@angular/router';

import {InicioComponent} from "./components/inicio/inicio.component";
import {ComplementoComponent} from "./components/complemento/complemento.component";
import {ContactoComponent} from "./components/contacto/contacto.component";
import {SomosComponent} from "./components/somos/somos.component";
import {CatalogoComponent} from "./components/catalogo/catalogo.component";

const app_routes: Routes = [
    {path:'inicio',component:InicioComponent},
    {path: 'alquimia', component: ComplementoComponent,
    children:[
      {path: 'catalogo', component: CatalogoComponent },
      {path: 'quienes-somos', component: SomosComponent},
      {path: 'contacto', component: ContactoComponent},
      { path: '**', pathMatch: 'full', redirectTo: 'catalogo' }
    ]
  },
    {path:'**', pathMatch:'full', redirectTo:'inicio'}
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);