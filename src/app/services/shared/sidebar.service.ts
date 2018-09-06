import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Dasboard', url: '/dashboard' },
        { titulo: 'ProgressBar', url: '/progress' },
        { titulo: 'Gráficas', url: '/graficas1' },
        { titulo: 'Promesas', url: '/promesas' },
        { titulo: 'Reactive Forms', url: '/rforms' },
        { titulo: 'Marcas', url: '/marca' },
        { titulo: 'Modelos', url: '/modelo' },
        { titulo: 'Estados', url: '/estado'},
        { titulo: 'Categoria', url: '/categoria'},
        { titulo: 'Color', url: '/color'},
        { titulo: 'Producto', url: '/producto'},
        { titulo: 'RxJs', url: '/rxjs'}
      ]
    }
];
  constructor() { }

}
