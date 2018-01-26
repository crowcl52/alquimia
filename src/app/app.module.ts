import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';

// Services
import {AlquimiaService} from './service/alquimia.service';
// Routes
import {APP_ROUTING} from './app.routes';
// Import ParticlesModule
import { ParticlesModule } from 'angular-particle';


import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HeaderComponent } from './components/compartidos/header/header.component';
import { SomosComponent } from './components/somos/somos.component';
import { ComplementoComponent } from './components/complemento/complemento.component';
import { FooterComponent } from './components/compartidos/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CatalogoComponent,
    ContactoComponent,
    HeaderComponent,
    SomosComponent,
    ComplementoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    PdfViewerModule,
    ParticlesModule 
  ],
  providers: [
    AlquimiaService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
