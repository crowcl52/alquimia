import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Services
import {AlquimiaService} from './service/alquimia.service';
// Routes
import {APP_ROUTING} from './app.routes';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';


import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HeaderComponent } from './components/compartidos/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CatalogoComponent,
    ContactoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    NgxCarouselModule
  ],
  providers: [
    AlquimiaService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
