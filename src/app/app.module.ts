import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, } from '@angular/common/http';

// Rutas
import { APP_ROUTES } from './app.routes';

// Modulos
import { PagesModule } from './pages/pages.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceModule } from './services/service.module';

// Servicios
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { MarcaService } from './services/marca.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { ModeloService } from './services/modelo.services';
import { EstadoService } from './services/estado.service';
import { AllService } from './services/all.service';
import { CategoriaService } from './services/categoria.service';
import { ColorService } from './services/color.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    APP_ROUTES,
    PagesModule,
    ReactiveFormsModule,
    FormsModule,
    ServiceModule,
    NgxPaginationModule,
    BrowserTransferStateModule
    ],
  providers: [
    MarcaService,
    ModeloService,
    EstadoService,
    CategoriaService,
    ColorService,
    AllService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
