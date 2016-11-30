import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  items: FirebaseListObservable<any[]>;
  af: AngularFire;
  mapTitle: string = 'Couriers on Map';
  // google maps zoom level
  zoom: number = 10;
  // initial center position for the map
  lat: number = 32.1618472;
  lng: number = 34.8072596;

  constructor(af: AngularFire) {
    this.af = af;
    this.items = af.database.list('/');
  }
  turn(courier) {
    if (courier.on) {
      this.af.database.object('/' + courier.$key + '/on').set(false);
    } else {
      this.af.database.object('/' + courier.$key + '/on').set(true);
    }
  }
  showStatus(status): String {
    if(status)       
      return "ON";
    else
      return "OFF";
  }
  showActivity(state): String {
    switch (state) {
      case 0:
        return "Now driving";
      case 1:
        return "Now riding on bike";
      case 2:
        return "Now walking or running";
      case 8:
        return "Now running";
      case 3:
        return "Now staying";
      case 5:
        return "Now titling";
      case 7:
        return "Now walking";
      default:
        return "Activity unreachable";
    }
  }
  focus(courier) {
    this.lat = courier.lat;
    this.lng = courier.lng;
    this.zoom = 16;
  }
}
