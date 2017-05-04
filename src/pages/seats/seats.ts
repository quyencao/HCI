import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Seat } from '../seat/seat';

/**
 * Generated class for the Seats page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-seats',
  templateUrl: 'seats.html',
})
export class Seats {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Seats');
  }

  openPage() {
    this.navCtrl.push(Seat);
  }
}
