import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Doors } from "../doors/doors";

/**
 * Generated class for the Door page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-door',
  templateUrl: 'door.html',
})
export class Door {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Door');
  }

  back() {
    this.navCtrl.setRoot(Doors);
  }
}
