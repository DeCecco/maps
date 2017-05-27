import { Component } from '@angular/core';
import { NavController,IonicPage ,NavParams } from 'ionic-angular';
import {
 GoogleMaps/*,
 GoogleMap,
 GoogleMapsEvent,
 LatLng,
 CameraPosition,
 MarkerOptions,
 Marker*/
} from '@ionic-native/google-maps';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private googleMaps: GoogleMaps,public navParams: NavParams) {
    
  }

}
 /* ionViewDidLoad(){
    this.loadMap();
  }*/
  start(){
    
  }
  