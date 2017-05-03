import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TrunkPage } from '../trunk/trunk';
import { AirconditionerPage } from '../airconditioner/airconditioner';
import { Light } from '../light/light';

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
    Light
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
