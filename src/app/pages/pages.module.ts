import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';

// Rutas
import { PAGES_ROUTES } from './pages.routes';

// Modulos
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

// temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { RFormsComponent } from './r-forms/r-forms.component';
import { MarcaComponent } from '../components/marca/marca.component';
import { MarcalistComponent } from '../components/marcalist/marcalist.component';
import { ModeloComponent } from './modelo/modelo.component';
import { EstadoComponent } from './estado/estado.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ColorComponent } from './color/color.component';
import { ProductoComponent } from './producto/producto.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficoDonaComponent,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent,
    RFormsComponent,
    MarcaComponent,
    MarcalistComponent,
    ModeloComponent,
    EstadoComponent,
    CategoriaComponent,
    ColorComponent,
    ProductoComponent
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    MarcaComponent,
    MarcalistComponent
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES,
    ReactiveFormsModule,
    FormsModule,
    ChartsModule,
    CommonModule,
    NgxPaginationModule
  ]
})

export class PagesModule { }
