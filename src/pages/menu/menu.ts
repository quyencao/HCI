import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TrunkPage } from '../trunk/trunk';
import { AirconditionerPage } from '../airconditioner/airconditioner';
import { Light } from '../light/light';
import { Sideviewmirror } from '../sideviewmirror/sideviewmirror';
import { Lock } from '../lock/lock';
import { Phone } from '../phone/phone';
import { Seats } from '../seats/seats';
import { Doors } from '../doors/doors';
import { Cameras } from '../cameras/cameras';

/**
 * Generated class for the Menu page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  pages:any[] = [
    TrunkPage,
    AirconditionerPage,
    Light,
    Sideviewmirror,
    Lock,
    Phone,
    Seats,
    Doors,
    Cameras
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Menu');
  }

  openPage(pageIndex) {
    this.navCtrl.push(this.pages[pageIndex]);
  }
}
