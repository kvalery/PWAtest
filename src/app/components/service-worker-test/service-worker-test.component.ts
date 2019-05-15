import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-worker-test',
  templateUrl: './service-worker-test.component.html',
  styleUrls: ['./service-worker-test.component.scss']
})
export class ServiceWorkerTestComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit() {
  }
  public sWstart() {
    console.log('is navigator.serviceWorker = ', !!navigator.serviceWorker )
    if (navigator.serviceWorker) {
      navigator.serviceWorker.register('sw-test.js', { scope: '/sw' } )
        .then(() => {console.log('then')})
        .catch(() => {console.log('serviceWorker faile')});
    }

  }

}
