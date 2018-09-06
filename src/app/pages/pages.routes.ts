import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { RFormsComponent } from './r-forms/r-forms.component';
import { MarcaComponent } from '../components/marca/marca.component';
import { ModeloComponent } from './modelo/modelo.component';
import { MarcalistComponent } from '../components/marcalist/marcalist.component';
import { EstadoComponent } from './estado/estado.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ColorComponent } from './color/color.component';
import { ProductoComponent } from './producto/producto.component';


const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard'} },
            { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress'} },
            { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Graficas'}},
            { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas'}},
            { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RXJS'}},
            { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Account Settings'} },
            { path: 'rforms', component: RFormsComponent, data: { titulo: 'Reactive Forms'}},
            { path: 'marca/:marcaID', component: MarcaComponent, data: { titulo: 'Agregar/Editar'}},
            { path: 'marca/:nuevo', component: MarcaComponent, data: { titulo: 'Registrar una Marcas'}},
            { path: 'marca', component: MarcalistComponent, data: { titulo: 'Lista de Marcas'}},
            { path: 'modelo', component: ModeloComponent, data: { titulo: 'Modelos'}},
            { path: 'categoria', component: CategoriaComponent, data: { titulo: 'Categoria'}},
            { path: 'estado', component: EstadoComponent, data: { titulo: 'Estados'}},
            { path: 'producto', component: ProductoComponent, data: { titulo: 'Producto'}},
            { path: 'color', component: ColorComponent, data: { titulo: 'Color'}},
            { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
