import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';
import { PushNotificationsService } from '../../services/push.notification.service';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: []
})
export class PromesasComponent implements OnInit {

  constructor( private _notificationService: PushNotificationsService) { 

    console.log(Date.now());
    this.contarTres().then(
      mensaje => {
        let title = 'Intranet';
        let body = 'El mensajito';
        this.notify(title,body,Date.now());

        let fec = Date.now();
        console.log('Se detuvo a las ', Date.now().toString())
      }
    )
    .catch( error => console.error('Error en la promesa', error));
  }

  ngOnInit() {
  }

  contarTres(): Promise<boolean> {
    return new Promise( (resolve, reject) => {
      let contador ;

      let intervalo = setInterval( () => {

        contador = Date.now();
        console.log( contador );

        if ( contador >= 1536091167344 ) {
          resolve(true);
          //reject('Simplemente un error');
          clearInterval(intervalo);
        }

      }, 100);
    });
  }

  notify(title: string, body: string, m: number) {
    let data: Array <any>= [];
    data.push({
        'title': title,
        'alertContent': body
    });
    this._notificationService.generateNotification(data);
}
}
